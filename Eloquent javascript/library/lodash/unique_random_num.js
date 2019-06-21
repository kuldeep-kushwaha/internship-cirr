var arr=[1,2,3,4,5];
var l=arr.length;
var ran=[];
var ran_num;


for(var j=0;j<20;j++)
{
  ran=[];
  for(var i=0;i<l;i++)
  {
   ran_num =Math.floor(Math.random() * (l - 0) + 0);
    if(ran.indexOf(ran_num)>-1)
      { i=i-1;}
    else
      {
        ran.push(ran_num);
       // console.log(ran)
      }   
    }
  console.log(ran)
}
