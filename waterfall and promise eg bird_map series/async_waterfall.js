var waterfall = require('async-waterfall');
const request = require('request');

var name = "kuldeep";
var value = {};
var arr = []


function username(callback) {
    //value.name="kuldeep";
    request({
        url: 'https://www.pivotaltracker.com/services/v5/me',
        method: "GET",
        headers: {
            "content-type": "application/json",
            "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
        },//qs:{created_after:options.meta.cursor}
    }, function (err, resp, body) {
        if (err) {
            return output(err, null)
        }
        if (resp.statusCode !== 200) {
            return output(body, null)
        } else {
            var body = JSON.parse(body)
            var user_name = body.name;
            return callback(null, user_name);
        }
    });
}
function project(user_name, callback) {
    request({
        url: 'https://www.pivotaltracker.com/services/v5/projects/2186346',
        method: "GET",
        headers: {
            "content-type": "application/json",
            "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
        },//qs:{created_after:options.meta.cursor}
    }, function (err, resp, body) {
        if (err) {
            return output(err, null)
        }
        if (resp.statusCode !== 200) {
            return output(body, null)
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
        url: 'https://www.pivotaltracker.com/services/v5/projects/' + '2186346' + '/stories',
        method: "GET",
        headers: {
            "content-type": "application/json",
            "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
        }, qs: { created_after: '2018-07-23T13:16:58Z' }
    }, function (err, resp, body) {
        if (err) {
            return output(err, null)
        }
        if (resp.statusCode !== 200) {
            return output(body, null)
        } else {

            JSON.parse(body).forEach(element => {
                var value = {
                    "user_name":user_name,
                    "project_name":project_name,
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
                arr.push(value)
            })
            //   console.log("-------",arr)
            return callback(null, arr);
        }
    });
}


waterfall([username, project, stories], function (err, arr) {
    // result now equals 'done'
    if(err){
        return output(body, null)
    }
    console.log("result--", arr)
});