const request = require('request');
const buffer = require('buffer').Buffer;
var moment = require('moment');
var waterfall = require('async-waterfall');


module.exports = {

  name: "new_story",

  label: "New Story",

  version: "v3",

  input: {
    type: 'object',
    title: 'New Story',
    description: "Short description",
    properties: {
      "projectid": {
        "title": "Project Id",
        "type": "string",
        "minLength": 1,
        "description": 'Can be found at the end of url in project page',
        "propertyOrder": 1
      },
      event: {
        type: 'string',
        enum: ['new_story']
      }
    }
  },

  output: {
    "new_story": {
      type: 'object',
      properties: {

        id: {
          title: "id",
          displayTitle: "id",
          type: "number"
        },
        kind: {
          title: "kind",
          displayTitle: "Kind",
          type: "string"
        },
      
        user_name: {
          title: "user_name",
          displayTitle: "User Name",
          type: "string"
        },
        user_id: {
          title: "user_id",
          displayTitle: "User Id",
          type: "number"
        },

        project_id: {
          title: "project_id",
          displayTitle: "project Id",
          type: "string"
        },

        project_name: {
          title: "project_name",
          displayTitle: "project Name",
          type: "string"
        },
        project_url: {
          title: "project_url",
          displayTitle: "Project Url",
          type: "url"
        },
        
        name: {
          title: "name",
          displayTitle: "Name",
          type: "string"
        },
        
        estimate: {
          title: "estimate",
          displayTitle: "Estimate",
          type: "number"
        },
        story_type: {
          title: "story_type",
          displayTitle: "Story Type",
          type: "date"
        },
       
        description: {
          title: "description",
          displayTitle: "Description",
          type: "string"
        },
        current_state: {
          title: "current_state",
          displayTitle: "Current State",
          type: "string"
        },
        requested_by_id: {
          title: "requested_by_id",
          displayTitle: "Requested By Id",
          type: "number"
        },
        story_url: {
          title: "story_url",
          displayTitle: "Story Url",
          type: "url"
        },
       
        owner_ids: {
          title: "owner_ids",
          displayTitle: "Owner Id",
          type: "array",
          items: {
            id: {
              title: "id",
              displayTitle: "Id",
              type: "number"
            }
          }
        },
        labels: {
          title: "labels",
          displayTitle: "Labels",
          type: 'array',
          items: {
            type: "object",
            properties: {
              id: {
                title: "id",
                displayTitle: "Id",
                type: "date"
              },
              project_id: {
                title: "project_id",
                displayTitle: "project Id",
                type: "date"
              },
              kind: {
                title: "kind",
                displayTitle: "Kind",
                type: "string"
              },
              name: {
                title: "name",
                displayTitle: "Name",
                type: "string"
              },
              created_at: {
                title: "created_at",
                displayTitle: "Created At",
                type: "date"
              },
              updated_at: {
                title: "updated_at",
                displayTitle: "Updated At",
                type: "date"
              },
            }
          }
        },
        owned_by_id: {
          title: "owned_by_id",
          displayTitle: "Owned By Id",
          type: "number"
        },
        created_at: {
          title: "created_at",
          displayTitle: "Created At",
          type: "date"
        },
        updated_at: {
          title: "updated_at",
          displayTitle: "Updated At",
          type: "date"
        },
      }
    }
  },

  mock_data: {
    "id": 122186871,
    "kind": "story", 
    "user_name": 'Jhon',
    "user_id": 3081425,
    "project_id": 1610303,
    "project_name": 'github',
    "project_url": 'https://www.pivotaltracker.com/n/projects/123457',
    "name": "Create Simple Module for for End User ",
    "estimate": 2,
    "story_type": "feature",
    "description": "Module to enhance application feature ",
    "current_state": "started",
    "requested_by_id": 2020395,
    "story_url": "https://www.pivotaltracker.com/story/show/122186871", 
    "owner_ids": [
      2020395
    ],
    "labels": [
      {
        "id": 15198283,
        "project_id": 1610303,
        "kind": "label",
        "name": "epic",
        "created_at": "2016-06-24T09:33:24Z",
        "updated_at": "2016-06-24T09:33:24Z"
      }
    ],
    "owned_by_id": 154274,
    "created_at": "2016-06-24T09:31:28Z",
    "updated_at": "2016-06-24T09:33:24Z",
  }, // output of trigger data

  mock_input: {
    projectid: "2186346"
  },

  getUserData: function (input, options, output) {

    var arr = []
    function username() {
      return new Promise(function (resolve, reject) {
        // console.log("inside won ");
        request({
          url: 'https://www.pivotaltracker.com/services/v5/me',
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-TrackerToken": input.auth.api_key
          }
        }, function (err, resp, body) {
          if (err) {
            reject(err);
          }
          if (resp.statusCode !== 200) {
            reject(err);
          } else {
            var body = JSON.parse(body)
            var user_name = body.name;
            var user_id = body.id;
            resolve([user_name, user_id]);
          }
        });

      });
    }

    function project() {
      return new Promise(function (resolve, reject) {
        request({
          url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid,
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-TrackerToken": input.auth.api_key
          },
        }, function (err, resp, body) {
          if (err) {
            reject(err)
          }
          if (resp.statusCode !== 200) {
            reject(err)
          } else {
            var body = JSON.parse(body)
            var project_name = body.name;
            resolve(project_name);

          }
        });
      });
    }

    function stories() {
      return new Promise(function (resolve, reject) {
        request({
          url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid + '/stories',
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-TrackerToken": input.auth.api_key
          }, qs: { created_after: options.meta.cursor }
        }, function (err, resp, body) {
          if (err) {
            reject(err)
          }
          if (resp.statusCode !== 200) {
            reject(err)
          } else {

            JSON.parse(body).forEach(element => {
              var value = {
                "id": element.id,
                "kind": element.kind,
                "user_name": '',
                "user_id": '',
                "project_id": element.project_id,
                "project_name": '',
                "project_url": 'https://www.pivotaltracker.com/projects/' + input.projectid,
                "name": element.name,
                "estimate": element.estimate,
                "story_type": element.story_type,
                "description": element.description,
                "current_state": element.current_state,
                "requested_by_id": element.requested_by_id,
                "story_url": element.url,
                "owner_ids": element.owner_ids,
                "labels": element.labels,
                "owned_by_id": element.owned_by_id,
                "created_at": element.created_at,
                "updated_at": element.updated_at,
              }
              arr.push(value)
            })
            resolve(arr);
          }
        });


      });
    }

    Promise.all([username(), project(), stories()]).then(values => {
      values[2].map(x => {
        x.user_name = values[0][0]
        x.project_name = values[1]
        x.user_id = values[0][1]
      })
      var story = values[2];

      output(null, story)
    }).catch(err => {
      return output(err, null)
    });
  },

  execute: function (input, options, output) {


    //  console.log("--execute runnning");

    var arr = []
    function username() {
      return new Promise(function (resolve, reject) {
        // console.log("inside won ");
        request({
          url: 'https://www.pivotaltracker.com/services/v5/me',
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-TrackerToken": input.auth.api_key
          }
        }, function (err, resp, body) {
          if (err) {
            reject(err);
          }
          if (resp.statusCode !== 200) {
            reject(err);
          } else {
            var body = JSON.parse(body)
            var user_name = body.name;
            var user_id = body.id;
            resolve([user_name, user_id]);
          }
        });

      });
    }

    function project() {
      return new Promise(function (resolve, reject) {
        request({
          url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid,
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-TrackerToken": input.auth.api_key
          },
        }, function (err, resp, body) {
          if (err) {
            reject(err)
          }
          if (resp.statusCode !== 200) {
            reject(err)
          } else {
            var body = JSON.parse(body)
            var project_name = body.name;
            resolve(project_name);

          }
        });
      });
    }

    function stories() {
      return new Promise(function (resolve, reject) {
        request({
          url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid + '/stories',
          method: "GET",
          headers: {
            "content-type": "application/json",
            "X-TrackerToken": input.auth.api_key
          }, qs: { created_after: options.meta.cursor }
        }, function (err, resp, body) {
          if (err) {
            reject(err)
          }
          if (resp.statusCode !== 200) {
            reject(err)
          } else {

            JSON.parse(body).forEach(element => {
              var value = {
                "id": element.id,
                "kind": element.kind,
                "user_name": '',
                "user_id": '',
                "project_id": element.project_id,
                "project_name": '',
                "project_url": 'https://www.pivotaltracker.com/projects/' + input.projectid,
                "name": element.name,
                "estimate": element.estimate,
                "story_type": element.story_type,
                "description": element.description,
                "current_state": element.current_state,
                "requested_by_id": element.requested_by_id,
                "story_url": element.url,
                "owner_ids": element.owner_ids,
                "labels": element.labels,
                "owned_by_id": element.owned_by_id,
                "created_at": element.created_at,
                "updated_at": element.updated_at,
              }
              arr.push(value)
            })
            resolve(arr);
          }
        });


      });
    }

    Promise.all([username(), project(), stories()]).then(values => {
      values[2].map(x => {
        x.user_name = values[0][0]
        x.project_name = values[1]
        x.user_id = values[0][1]
      })
      var story = values[2];
      options.setMeta({
        cursor: new Date().toISOString()
      });
      output(null, story)
    }).catch(err => {
      return output(err, null)
    });
  },

  activate: function (input, options, output) {
    // this function will be called whenever user activate or reactivates flow
    // to access auth info use input.auth , eg: input.auth.username
    // you can use this function to reset your cursor or timestamp

    // your code goes here
    //  console.log("activate() running..branch..")
    options.setMeta({
      'cursor': new Date().toISOString()
    });
    output(null, true);
  },

  validate: function (input, options, output) {
    // will be called when trigger is created 1st time
    // to access auth info use input.auth , eg: input.auth.username
    // to successfully validate auth info and other parameter provided by user call output(null, true)
    // in case auth or other info is invalid, prevent creating trigger by sending error output('Username or password is invalid')

    // your code goes here

    //console.log("validate() running....")

    request({
      url: 'https://www.pivotaltracker.com/services/v5/me',
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-TrackerToken": input.auth.api_key
      }
    }, function (err, resp, body) {
      if (err) {
        output(err, null)
      }
      if (resp.statusCode !== 200) {
        output(body, null)
      } else {

        // console.log(body)
        output(null, body);
      }

    });
    // output(null, true);
  }
}
