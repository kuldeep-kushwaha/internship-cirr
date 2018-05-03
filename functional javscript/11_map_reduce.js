    
    
    //var nums=[1,2,3,4,5]

    module.exports = function arrayMap(arr, fn) {
      return arr.reduce(function(acc,val){
        acc.push(fn(val));
        return acc
      },[]);
    }
    

    //  var output = arrayMap(nums, function double(item) {
    //     // console.log(item);
    //      return item * 2
    //    })

    //  console.log(output);
  
