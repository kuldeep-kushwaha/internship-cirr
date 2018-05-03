var http= require('http');
var bl= require('bl');
var str;

http.get(process.argv[2], function(response) {
    // console.log("Got response: " + res.statusCode);
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
   
   }).on('error', function(e) {
     console.log("Got error: " + e.message);
   });
   