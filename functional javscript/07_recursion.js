
var ob={};
function reduce(arr)
{
    if(arr.length>0)
    {
        (arr[0] in ob)?( ob[arr[0]]++):(ob[arr[0]]=1)
        reduce(arr.slice(1))        
    }
    return ob;
      
}
module.exports = reduce