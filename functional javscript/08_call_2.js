
var c=1;
function duckCount() {
         Array.prototype.filter.call(arguments, (function(arg) {

          //    return Object.prototype.hasOwnProperty.call(arg, 'quack');
          if(Object.getPrototypeOf(arg) === Object.prototype)
          {
            if(Object.hasOwnProperty.call(arg,'quack'))
            {
             //   console.log(arg,c)
                        c++;
            }
          }
          }));
          return c;

        //   console.log("length--- ",arguments.length)

        //     // for(var i=0;i<arguments.length;i++)
        //     //   {                 
        //     //         console.log(arguments[i])
        //     //   } 

        //  //   var x= Array.from(arguments);                
        //             console.log(arguments)
        //             return 5
      }


    module.exports = duckCount