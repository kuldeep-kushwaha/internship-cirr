    
    function curryN(fn, n) {
        n = n || fn.length
        return function curriedN(arg) {
          if (n <= 1) return fn(arg)
          return curryN(fn.bind(this, arg), n - 1)
        }
      }
      
      module.exports = curryN
    
    
    //-----------------------------------------
    
    
    
    function curryN(fn, n) {
      // SOLUTION GOES HERE
      if(n)
      {
          arity =n;
      }else{
        var arity = fn.length;
      }
      
    //  console.log(arity,fn)

      return (function resolver() {
        //  console.log("----- arguments---",arguments);
        var memory = Array.prototype.slice.call( arguments );
       // console.log("----- arguments---",arguments);
      //  console.log("----- memory---",memory);
        return function() {
          var local = memory.slice(), next;
       //   console.log("----- local---",local);
        //  console.log("----- next---",next);
          Array.prototype.push.apply( local, arguments );
          next = local.length >= arity ? fn : resolver;
          return next.apply( null, local );
        };
      }());
      
    }
    
    module.exports = curryN

    

    // function add3(one, two, three,four) {
    //     return one + two + three+four
    //   }

      
//       var curryC = curryN(add3)
//   var curryB = curryC(1)
//       var curryA = curryB(2)
//       var curryZ = curryA(23)
//       console.log(curryZ(3)) // => 6
//       console.log(curryZ(10)) // => 13
  


