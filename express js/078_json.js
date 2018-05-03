var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  //console.log("---filename--",filename);
  fs.readFile(filename, function(e, data) {

  //  console.log("---data--",data.toString());

    books = JSON.parse(data)
   
    res.json(books)
  })
})

app.listen(process.argv[2])