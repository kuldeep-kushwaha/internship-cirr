var fs = require('fs');

fs.readdir(process.argv[2],function(err, data){


var f=data.toString().split(",");

//console.log(f);
//console.log("------------------------------");

for(var i=0;i<f.length;i++)
{
var arr=f[i].split(".");
if(arr[arr.length-1]==process.argv[3] && arr.length>1)
{
//console.log(f[i]);
}
}

});

//-------------------------------------------------------

