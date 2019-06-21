var express = require('express')
var app = express()
app.set('view engine', 'pug')
app.set('views', process.argv[3])
console.log(app.get('views'));
console.log(app.get('views engine'));
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])