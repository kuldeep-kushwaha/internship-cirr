//================================== collection ==================================

//----------------- size -----------------------

exports.size = function(arr)
{
    if(!arr) return 0;
    return Object.keys(arr).length;
}

//----------------- shuffle -----------------------

exports.shuffle =function(arr)
{
    var l=size(arr), ran=[], ran_num,arr_return=[];

    for(var i=0;i<l;i++)
    {
         ran_num=Math.floor(Math.random() * (l - 0) + 0);
         (ran.indexOf(ran_num)>-1)?(i=i-1):(ran.push(ran_num));
    }
    ran.map((a)=>{arr_return.push(arr[a])});
    return arr_return;
}


//================================== maths ==================================

//-----------------add -----------------------
exports.add=function(a,b)
{
  //  console.log("typeof a  "+typeof a );
  //  console.log("typeof b  "+typeof b );
    if(typeof a =='undefined' && b ==null) return null;
   if(a ==null && typeof b =='undefined') return null;
   if(typeof a =='function' || typeof b =='function') return NaN;
   if(typeof a =='undefined' || typeof b =='undefined') return 0;

    return a+b;
}

//----------------- mean ----------------------- 

exports.mean=function(arr=[])
{
    var temp=0;
    arr = arr.filter(function( element ) {
        return element !== undefined || element !== '';
     });
     if(arr!=="")
     {
        return (arr.reduce((a,b)=>a+b))/exports.size(arr);
     }
    else return NaN;
}

//================================== array ==================================

//----------------- chunk -----------------------

exports.chunk=function(arr=[],num=0)
{
   var arr_return=[];
   var arr_temp=[];
   var counter=0;
   var n=Math.floor(num);
  // console.log(typeof Number(n) === 'number')
   if((typeof Number(n) === 'number') && n==Number(n))
   {
        for(var i=0;i<arr.length;i++)
        {
                arr_temp.push(arr[i]);
                counter++;
                if(counter==n)
                {
                   // console.log("inside ifff");
                    arr_return.push(arr_temp);
                    arr_temp=[];
                    counter=0;
                
                }
        }
        if(arr_temp.length!=0)
        {
            arr_return.push(arr_temp);
            arr_temp=[];
        }
    
       // console.log(arr_return);
       return arr_return;
    }
    else{

        console.log("else");
        return arr_return;
    }

   
}


////----------------- compact ----------------------- 

exports.compact= function(arr=[])
{
    var arr_return=[];
    arr.map((a)=>{
        if(a)  arr_return.push(a);   
    });
   return arr_return;
}

//-------------------- concat -------------------------

exports.concat =function(...arr)
{
    var arr_return=[];
    arr.map((a)=>{

        if(typeof a === 'object' && a!== null)
        {
            a.map((b)=>{
                arr_return.push(b);
            })
        }else{
            
            arr_return.push(a);
        }
    });
    return arr_return;
}

//-------------------- drop -------------------------

exports.drop = function(arr,n=1)
{
   // var arr_return=[];
   if(isNaN(n))
   {
    return arr;
   }
    if(typeof arr === 'object' && arr!== null)
    {
        return arr.slice(n,arr.length)
    }
    return [];
}

//-------------------- dropRight -------------------------


exports.dropRight = function(arr,n=1)
{
   if(isNaN(n))
   {
    return arr;
   }
   
    if(typeof arr === 'object' && arr!== null)
    {
        //console.log(Math.abs(arr.length-n));
        return arr.slice(0,n>=arr.length?0:arr.length-n)
    }
    return [];
}

//-------------------------- unzip ----------------------------

exports.unzip =function(arr)
{
    var arr_return = new Array(1), counter=0;

    arr.map((a)=>{(Array.isArray(a))?((a.length>=counter)? counter=a.length:0):0;});
   
    for(var i=0;i<counter;i++) arr_return[i] = new Array(0);

    arr.map((a)=>{
        if(Array.isArray(a))
                    for(var j=0;j<counter;j++) arr_return[j].push(a[j]);           
             });
  return arr_return;
}

//-------------------------- union ----------------------------

exports.union=function(...arr)
{
    var obj = {},arr_return=[];
    arr.map((a)=>{
        (Array.isArray(a))?(a.map((b)=>{obj[b]=b;})):0;
    });
   // console.log(obj);
    for (var k in obj) arr_return.push(obj[k]);
    return arr_return;
   //   console.log(arr_return);
}

//================================== number ==================================
//----------------- inRange -----------------------


exports.inRange = function(num,start,end)
{
    (end===undefined)?(end = start,start=0):0
    return (num>=start && num<end);
}

//------------------------- flip ----------------------

exports.flip =function(fn)
{  
        return function(){     
           return exports.toArray(arguments).reverse();
        }
        
}

//========================== lang =============================

//------------------------- _.toArray(value) ----------------------

exports.toArray =function(value)
{
    var arr_return=[];

    if(!value || typeof value ==='number') return arr_return;
    if(Array.isArray(value) && typeof value ==='object') return value;
    if(!Array.isArray(value) && typeof value ==='object')
    {
            for(x in value) arr_return.push(value[x])
         return arr_return;
    }
    if(typeof value ==='string'){
        return value.split('');
    }
    return arr_return;
}

//------------------------- _.toArray(value) ----------------------

exports.gt =function(num1,num2)
{
    if(!isNaN(num1)) {return(num1>num2);}
    return false;
}

//--------------------- clone ---------------------------------

exports.clone= function(val)
{
    return val;
}

//=========================== functions ==========================

//------------------- after ----------------------------------

exports.after=function(n,fun)
{
 var counter=0;
  return function()
    {
      counter++;
      if(counter>=n)
      {
          return fun.apply(this, Array.prototype.slice.call(arguments, 0));
      }
    }
}

//--------------------- rearg-------------------

exports.rearg=function(fun,arr)
{
    var return_arr=[];
    return function(){
        for(var i=0;i<exports.size(arguments);i++)
        {
           if(arr[i]!=undefined)
           return_arr[i]=arguments[arr[i]];
           else
            return_arr[i]=arguments[i];
        }
        return return_arr;
    };
}

//--------------------- trim -------------------

exports.trim=function(str,exp)
{
    if(!str)
    {
        return '';
    }

   // (str)?(str=str.toString()):0;

   // console.log("fooo"+str)
   str=str.toString();

    if(exp===undefined && typeof str =='string')
    {
    return str.replace(/^[\s]+|[\s]+$/g,"");
    
    }    
    
    if(exp!==undefined)
    {
      //  console.log("yooo"+str)
        var reg= new RegExp("^["+exp+"]+|["+exp+"]+$", "gi", "gi");
        return str.replace(reg,"");
    }
    return str;
}








