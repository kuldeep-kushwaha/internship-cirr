var http = require("http");
var fs= require("fs");
var txt="";

//console.log(process.argv);
var readStream=fs.createReadStream(process.argv[3],'utf8');
readStream.on('data', function(chunk) {  
    txt += chunk;
});

let server = http.createServer((request, response) => {
 // response.writeHead(200, {"Content-Type": "text/html"});
  response.write(txt);
  response.end();
});
server.listen(process.argv[2]);




// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
