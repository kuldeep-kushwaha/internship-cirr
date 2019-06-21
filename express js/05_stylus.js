
var express = require('express')
var app = express()
var bodyparser = require('body-parser')

//app.use(bodyparser.urlencoded({extended: false}))
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

// app.post('/form', function(req, res) {

//   //  res.send(req.body.str.split('').reverse().join(''));

//  // res.render('index', {date: new Date().toDateString()})
// })
app.listen(process.argv[2]);