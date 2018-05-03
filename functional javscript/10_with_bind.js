//   module.exports = function(namespace) {
//       return console.log.bind(console, namespace);
//    //   return 0;
//     }

  var print=function(namespace) {
           return console.log.bind(console, namespace);
        //   return 0;
     }


     var x=print("aaa");
   var y=x("bbb");
  // y("ccc");
    
