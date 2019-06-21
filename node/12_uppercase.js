var http = require("http");
var fs= require("fs");
var map = require('through2-map');
var bl = require('bl');
var txt="";
//console.log(process.argv);

let server=http.createServer((req,res)=>{


   
    // req.pipe(map(function (chunk) {  
    //  return chunk.toString().toUpperCase();  
    // })).pipe(res);

    req.pipe(bl(function(err,data){
        txt += data.toString().toUpperCase();
        res.write(txt);
    }))

});
server.listen(process.argv[2]);