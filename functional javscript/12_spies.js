
module.exports =function Spy(target, method) 
{
    var orig=target[method];
    var ob={
        count:0
    };
  //  console.log("----callled-------");
  //  var target = {};
    target[method] = function(args)
    {
        ob.count++;
 //      console.log(ob);
        orig(args);   
    }; 
    return ob;
};


// var s=Spy(console,'error');
// console.error('calling console.error');
// console.error('calling console.error')
// console.error('calling console.error')
// console.log(s.count)

