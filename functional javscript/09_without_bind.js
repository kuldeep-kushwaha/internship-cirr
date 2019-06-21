var slice = Array.prototype.slice
    
function logger(namespace) {
  // SOLUTION GOES HERE

 return function print()
 {

  //   console.log(Array.from(arguments).reduce((a,b)=>{ return (a=a+" "+b)},namespace));
  //  arguments[-1]=namespace;
  //  console.log(arguments);
  // console.log.apply(console, [namespace].concat(slice.call(arguments)))
    console.log.apply(console,[namespace].concat(Array.from(arguments)));
 }
}

module.exports = logger



