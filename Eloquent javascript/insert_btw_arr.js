
var  arr=[1,2,3,4,5]

function insert(arr,pos,val)
{
    var temp;
    var b;
    var count=0;
    var len=arr.length;
    for(var i=pos;i<=len;i++)
    {
        if(i==pos)
        {
            temp=arr[i];
            arr[i]=val;
        }
        else{
            b=arr[i];
            arr[i]=temp;
            temp=b;
            }
        
    }
    return arr;
}

console.log(insert(arr,0,50));

