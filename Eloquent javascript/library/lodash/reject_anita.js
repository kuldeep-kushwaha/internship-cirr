var $=require("./ease");
var l=require("./lodash");

function reject(array,predicate) { 
    
if(typeof predicate == 'function') 
{ 
    return array.filter((item) => !predicate(item)); 
} 
else if(typeof predicate =='object' && !Array.isArray(predicate)) {

//array = array.filter(i => delete i.user)
//console.log("--------------to-----------------------------------------------");
var pro=[];
var val=[];
var count=0;
var temp=[];
var arr_return=[];
for(x in predicate)
{
    pro.push(x);
    val.push(predicate[x]);
}
var l=pro.length;
for(x of array)
{
    count=0;
    for(var j=0;j<l;j++)
    {
        if(x[pro[j]]==val[j])
         count++;
    }
    if(count == l)
        temp.push(x);
    
}
var chk=true;
for(x of array)
{
    chk=true;
    for(y of temp)
    {
        if(JSON.stringify(x)===JSON.stringify(y))
            chk=false;
    }
    if(chk)
        arr_return.push(x);

}
return arr_return;
}
else if(typeof predicate =='object' && Array.isArray(predicate))
{
    
return array.filter((item) => item[predicate[0]] != predicate[1]);
}
else {

return array.filter((item) => (!item[predicate])?item:0);
}
}

var users = [
{ 'user': 'barney', 'age': 11, 'active': true },
{ 'user': 'fred',   'age': 40, 'active': false },
{ 'user': 'duck',   'age': 18, 'active': true },
{ 'user': 'barney',   'age': 18, 'active': false }
];

//console.log(reject(users,  function(o) { return o.active; }));
//console.log(reject(users, {'user':'fred', 'active': false }));
//console.log(reject(users, ['user','barney']));

console.log(l.reject(users,'user'));

console.log(reject(users,'user'));

//console.log(l.reject(users, { 'age':40, 'active': true }));
