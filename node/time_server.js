

//console.log(process.argv[2]);

var date = new Date()
var d="";
var net = require('net')  
     var server = net.createServer(function (socket) { 

        d=date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";
        socket.write(d);
       socket.end();
     })  
     server.listen(process.argv[2]);