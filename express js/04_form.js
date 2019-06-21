
var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {

    res.send(req.body.str.split('').reverse().join(''));

 // res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2]);

///dddddddddddddddddddd