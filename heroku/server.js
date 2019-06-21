    
    
    var express = require('express')
    var path = require('path')
    var app = express()
    app.get('/', function(req, res) {
    //  res.send("yoo")
    res.sendFile(path.join(__dirname, './index.html'));
    })
    app.listen(8090)
