var http= require('http');
var bl= require('bl');
var str;
var url=[];
var count=0;

for(var i=2;i<process.argv.length;i++)
url.push(process.argv[i]);


read(count);

function read(count)
{

    http.get(url[count], function(response) {
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            if (err)
              return console.error(err)
            console.log(data.toString());
      
       if(count<url.length-1)
       {
        count++;
        read(count);
       }
          }))
    
       }).on('error', function(e) {
         console.log("Got error: " + e.message);
       });
}

   