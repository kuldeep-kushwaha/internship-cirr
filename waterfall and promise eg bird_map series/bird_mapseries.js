var bluebird = require("bluebird"); 

   bluebird.mapSeries(values[2], function (x) {
        console.log("map--ser--id", x.id)
        return new Promise((resolve, reject) => {
            request({
                url: 'https://www.pivotaltracker.com/services/v5/projects/' + '2186609' + '/epics/' + x.id + '/comments',
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

                    x.comments = body;
                     resolve(x)
                 //   console.log("----------- inside arr body-------------")

                }
            });
        });
    }).then(function (ab) {
        console.log("----final 12-----", ab)
    })
