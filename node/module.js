
var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                return (path.extname(file) === '.' + extension)
            })
         callback(null, list);
           
        }
    })
}
    // module.exports = function(p,e)
    // {

    //     var folder = p;
    //     var ext = '.' +e;
        
    //     fs.readdir(folder, function (err, files) {
    //       if (err) return console.error(err)
    //     //  console.log(files)
    //     //  console.log("----------------------")
    //       files.forEach(function (file) {
    //         //console.log(file)
    //      //   console.log(path.extname(file))
    //         if (path.extname(file) === ext) {
    //           console.log(file)
    //         }
    //       })
    //     })

    // }


