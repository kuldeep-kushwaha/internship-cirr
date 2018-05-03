var http = require("http");
var fs= require("fs");
var map = require('through2-map');
var bl = require('bl');
var url = require('url');
var datetime = require('node-datetime');
var txt="";
//console.log(process.argv);

let server=http.createServer((req,res)=>{


 var url_parts = url.parse(req.url,true);

var date_time=url_parts.query['iso'];
var pastDateTime = datetime.create(date_time);

var formatted = pastDateTime.format('Y-m-d H:M:S');

var hour = pastDateTime.format('H');
var min = pastDateTime.format('M');
var sec = pastDateTime.format('S');



//console.log("--snd--",snd);
 if(url_parts.pathname == "/api/parsetime")
 {
  //  console.log(JSON.stringify(snd));
  var snd={
            hour:Number(hour),  
            minute:Number(min),  
            second:Number(sec) 
            };

    res.write(JSON.stringify(snd));
   
 }
 else if(url_parts.pathname == '/api/unixtime')
 {
  var snd={
             unixtime:Number(pastDateTime.getTime()),  
            };
            res.write(JSON.stringify(snd));
 }

 res.end();

});
server.listen(process.argv[2]);