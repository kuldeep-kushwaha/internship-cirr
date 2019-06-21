    
   
   function print()
   {
   //  console.log("Operations successfully interrupted!");
    // return 0;
   }
   
   //timeoutID = window.setTimeout(print, 1000);  
   
    
    function repeat(operation, num) {
      // modify this so it can be interrupted
  //    console.log("Operations successfully interrupted!");
     // console.log("num ", num);
     if (num <= 0)   return
     operation();
   //  console.log("inside if=====================================");

     setTimeout(function() {
      repeat(operation, --num)
  })
    // var immediateID = setImmediate(print());
   //console.log(arr[10]);

  //   console.log("===inside if============");
   //  return repeat(operation, --num)

    }
    
    module.exports = repeat
