    
    
    function operation()
    {
        console.log("yoo");
    }

    function repeat(operation, num) {
     var i=1
      while(i<=num)
      {
        operation();
        i++;
      }
    }
    
    // Do not remove the line below
    module.exports = repeat

    //repeat(operation,2)
