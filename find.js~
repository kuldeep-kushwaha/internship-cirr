exports.flip =function(fn)
{
    console.log(fn);
    return ()=>{
        let reversedArgs = exports.toArray(arguments).reverse()
        fn
    };
}
var a=exports.flip(function() {
    return exports.toArray(arguments);
  });

  console.log(a);
  console.log(a("1","2"));
