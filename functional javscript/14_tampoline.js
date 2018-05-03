
function repeat(operation, num) {
    return function() {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
  }
  
  function trampoline(fn) {
        console.log("trampoline-called");
        var c=0;
      while (typeof fn === 'function') {
          console.log(typeof fn === 'function');
          console.log(c++);
        fn = fn();
    }
    return fn;
  }
  
  module.exports = function(operation, num) {
    trampoline(
      repeat(operation, num)
    )
  }