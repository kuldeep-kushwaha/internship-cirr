
var e = require('express');
var app = e();

// app.get('/home', function(req, res){
//    res.send("Hello World! -- get method called");
// });

var express = require('express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});


// app.post('/home', function(req, res){
//     res.send("Hello World! -- post method called");
//  });

//  app.all('/home', function(req, res){
//     res.send("Hello World! -- all method called");
//  });

app.listen(process.argv[2]);