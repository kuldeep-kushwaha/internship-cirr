var waterfall = require('async-waterfall');
const request = require('request');

var arr = []


function username() {
    return new Promise(function (resolve, reject) {
        // console.log("inside won ");
        request({
            url: 'https://www.pivotaltracker.com/services/v5/me',
            method: "GET",
            headers: {
                "content-type": "application/json",
                "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
            },//qs:{created_after:options.meta.cursor}
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
            url: 'https://www.pivotaltracker.com/services/v5/projects/2186609',
            method: "GET",
            headers: {
                "content-type": "application/json",
                "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
            },//qs:{created_after:options.meta.cursor}
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
        // console.log("inside won ");
        request({
            url: 'https://www.pivotaltracker.com/services/v5/projects/' + '2186609' + '/stories',
            method: "GET",
            headers: {
                "content-type": "application/json",
                "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
            }, qs: { created_after: '2018-07-25T06:19:49Z' }
        }, function (err, resp, body) {
            if (err) {
                return output(err, null)
            }
            if (resp.statusCode !== 200) {
                return output(body, null)
            } else {

                JSON.parse(body).forEach(element => {
                    var value = {
                        "user_name": '',
                        "user_id": '',
                        "project_name": '',
                        // "kind": element.kind,
                        // "id": element.id,
                        // "created_at": element.created_at,
                        // "updated_at": element.updated_at,
                        // "estimate": element.estimate,
                        // "story_type": element.story_type,
                        "name": element.name,
                        // "description": element.description,
                        // "current_state": element.current_state,
                         "requested_by_id": element.requested_by_id,
                         "requested_by_name": '',
                        // "story_url": element.url,
                        "project_id": element.project_id,
                        "owner_ids": element.owner_ids,
                        //    "labels": element.labels,
                        "owned_by_id": element.owned_by_id,
                        "owned_by_name": ''
                    }
                    arr.push(value)
                })
                resolve(arr);
            }
        });
    });
}

function membership() {
    return new Promise(function (resolve, reject) {
        request({
            url: 'https://www.pivotaltracker.com/services/v5/projects/2186609/memberships',
            method: "GET",
            headers: {
                "content-type": "application/json",
                "X-TrackerToken": '34dc542015730df8c0b0a226b5c6ff96'
            },//qs:{created_after:options.meta.cursor}
        }, function (err, resp, body) {
            if (err) {
                reject(err)
            }
            if (resp.statusCode !== 200) {
                reject(err)
            } else {
                var body = JSON.parse(body)
                var member = []
                body.forEach(element => {
                    var data = {
                        "id": element.person.id,
                        "name": element.person.name,
                    }
                    member.push(data)
                })
                resolve(member);

            }
        });
    });
}
Promise.all([username(), project(), stories(), membership()]).then(values => {
    // console.log(values); // [3, 1337, "foo"] 


    values[2].map(x => {
        x.user_name = values[0][0]
        x.project_name = values[1]
        x.user_id = values[0][1]
    })

    var story = values[2];
  
   // console.log("type --", typeof (story))
 //   console.log("type --values[2]", typeof (values[2]))
    //  console.log("type --values[3]", values[2][0].owner_ids)

    // values[3].map(mem => {
    //     console.log("mebership data ", mem)
    // })

    story.forEach(curr => {
       // console.log("story-- ", curr.owner_ids)
        curr.owner_ids.map((id,id_index) => {
            values[3].map((mem,mem_index)=> {
                if (mem.id == id)
                {
                   // console.log("final --", mem)
                    curr.owner_ids[id_index]=values[3][mem_index]
                }

                if(mem.id == curr.owned_by_id)
                {
                    curr.owned_by_name=mem.name
                }

                if(mem.id == curr.requested_by_id)
                {
                    curr.requested_by_name=mem.name
                }             
            })
        })
    })

    console.log(story)

    story.forEach(curr => {
        console.log("finalll-- ", curr.owner_ids)
    })


    // story['owner_ids'].map(curr=>{
    //     console.log("story data ",curr)
    // })

}).catch(err => {
    console.log('err-', err)
});