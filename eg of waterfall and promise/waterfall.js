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
        user_name: {
          title: "user_name",
          displayTitle: "User Name",
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
        kind: {
          title: "kind",
          displayTitle: "Kind",
          type: "string"
        },
        id: {
          title: "id",
          displayTitle: "id",
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
        name: {
          title: "name",
          displayTitle: "Name",
          type: "string"
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
        project_id: {
          title: "project_id",
          displayTitle: "project Id",
          type: "string"
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
      }
    }
  },

  mock_data: {
    "user_name": 'adtiya',
    "project_name": 'github',
    "project_url": 'https://www.pivotaltracker.com/n/projects/123457',
    "kind": "story",
    "id": 122186871,
    "created_at": "2016-06-24T09:31:28Z",
    "updated_at": "2016-06-24T09:33:24Z",
    "estimate": 2,
    "story_type": "feature",
    "name": "Create Simple Module for for End User ",
    "description": "Module to enhance application feature ",
    "current_state": "started",
    "requested_by_id": 2020395,
    "story_url": "https://www.pivotaltracker.com/story/show/122186871",
    "project_id": 1610303,
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
    ]
  }, // output of trigger data

  mock_input: {
    projectid: "2186346"
  },

  getUserData: function (input, options, output) {
    // will be called when testing trigger before it is created
    // return the actual data from your service which will be used for
    // creating output schema and it should be flat output json
    //return output(null, []);



    var story = []


    function username(callback) {
      //value.name="kuldeep";
      request({
        url: 'https://www.pivotaltracker.com/services/v5/me',
        method: "GET",
        headers: {
          "content-type": "application/json",
          "X-TrackerToken": input.auth.api_key
        },//qs:{created_after:options.meta.cursor}
      }, function (err, resp, body) {
        if (err) {
          callback(err, null)
        }
        if (resp.statusCode !== 200) {
          callback(err, null)
        } else {
          var body = JSON.parse(body)
          var user_name = body.name;
          return callback(null, user_name);
        }
      });
    }
    function project(user_name, callback) {
      request({
        url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "X-TrackerToken": input.auth.api_key
        },//qs:{created_after:options.meta.cursor}
      }, function (err, resp, body) {
        if (err) {
          callback(err, null)
        }
        if (resp.statusCode !== 200) {
          callback(err, null)
        } else {
          var body = JSON.parse(body)
          var project_name = body.name;
          return callback(null, user_name, project_name);
        }
      });
    }

    function stories(user_name, project_name, callback) {
      // arg1 now equals 'three'
      request({
        url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid + '/stories',
        method: "GET",
        headers: {
          "content-type": "application/json",
          "X-TrackerToken": input.auth.api_key
        }, qs: { created_after: options.meta.cursor }
        //qs: { created_after: '2018-07-23T13:16:58Z' }// 
      }, function (err, resp, body) {
        if (err) {
          callback(err, null)
        }
        if (resp.statusCode !== 200) {
          return output(body, null)
        } else {

          JSON.parse(body).forEach(element => {
            var new_story = {
              "user_name": user_name,
              "project_name": project_name,
              "project_url": 'https://www.pivotaltracker.com/projects/' + input.projectid,
              "kind": element.kind,
              "id": element.id,
              "created_at": element.created_at,
              "updated_at": element.updated_at,
              "estimate": element.estimate,
              "story_type": element.story_type,
              "name": element.name,
              "description": element.description,
              "current_state": element.current_state,
              "requested_by_id": element.requested_by_id,
              "story_url": element.url,
              "project_id": element.project_id,
              "owner_ids": element.owner_ids,
              "labels": element.labels,

            }
            story.push(new_story)
          })
          //   console.log("-------",arr)
          return callback(null, story);
        }
      });
    }


    waterfall([username, project, stories], function (err, story) {
      // result now equals 'done'
      if (err) {
        return output(body, null)
      }
      output(null, story)

      // console.log("result--", arr)
    });
  },

  execute: function (input, options, output) {
    // will be called every 5 minutes
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, [{ mykey : 'key', value : 'My Val'}])
    // output should be an array of objects or an empty array.

    // your code here

   // console.log(" exexute running")

    var story = []


    function username(callback) {
      //value.name="kuldeep";
      request({
        url: 'https://www.pivotaltracker.com/services/v5/me',
        method: "GET",
        headers: {
          "content-type": "application/json",
          "X-TrackerToken": input.auth.api_key
        },
      }, function (err, resp, body) {
        if (err) {
          callback(err, null)
        }
        if (resp.statusCode !== 200) {
          callback(err, null)
        } else {
          var body = JSON.parse(body)
          var user_name = body.name;
          return callback(null, user_name);
        }
      });
    }
    function project(user_name, callback) {
      request({
        url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "X-TrackerToken": input.auth.api_key
        },//qs:{created_after:options.meta.cursor}
      }, function (err, resp, body) {
        if (err) {
          callback(err, null)
        }
        if (resp.statusCode !== 200) {
          callback(err, null)
        } else {
          var body = JSON.parse(body)
          var project_name = body.name;
          return callback(null, user_name, project_name);
        }
      });
    }
    function stories(user_name, project_name, callback) {
      // arg1 now equals 'three'
      request({
        url: 'https://www.pivotaltracker.com/services/v5/projects/' + input.projectid + '/stories',
        method: "GET",
        headers: {
          "content-type": "application/json",
          "X-TrackerToken": input.auth.api_key
        }, qs: { created_after: options.meta.cursor }
        //qs: { created_after: '2018-07-23T13:16:58Z' }// 
      }, function (err, resp, body) {
        if (err) {
          callback(err, null)
        }
        if (resp.statusCode !== 200) {
          callback(err, null)
        } else {

          JSON.parse(body).forEach(element => {
            var new_story = {
              "user_name": user_name,
              "project_name": project_name,
              "project_url": 'https://www.pivotaltracker.com/projects/' + input.projectid,
              "kind": element.kind,
              "id": element.id,
              "created_at": element.created_at,
              "updated_at": element.updated_at,
              "estimate": element.estimate,
              "story_type": element.story_type,
              "name": element.name,
              "description": element.description,
              "current_state": element.current_state,
              "requested_by_id": element.requested_by_id,
              "story_url": element.url,
              "project_id": element.project_id,
              "owner_ids": element.owner_ids,
              "labels": element.labels,

            }
            story.push(new_story)
          })
          //   console.log("-------",arr)
          return callback(null, story);
        }
      });
    }


    waterfall([username, project, stories], function (err, story) {
      // result now equals 'done'
      if (err) {
        return output(body, null)
      }

      options.setMeta({
        cursor: new Date().toISOString()
      });
      // console.log("-------------------", story)
      output(null, story)

      // console.log("result--", arr)
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
