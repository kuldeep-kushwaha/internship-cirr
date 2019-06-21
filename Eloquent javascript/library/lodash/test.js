//var $ = require("./ease");
var l = require("./lodash");



var x = function (a, b) { return a + b };
var users =
  [{ 'user': 'barney', 'active': false }, { 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': true }];

var array = [1, 3, 6, 5, 6, 4];
var num = 20;
var nest = [["a", "b", "c", "d"], ["a", "x", "y", "z"], ["1", "a", "3", "a"]];
var sample = [undefined, null, 0, false];

old_labels = [
  {
    "id": 20340624,
    "name": "label 4"
  },

  {
    "id": 20340625,
    "name": "label 5"
  },
  
  {
    "id": 20340724,
    "name": "label 6"
  }
]

new_labels = [
  {
    "id": 20340624,
    "name": "label 4"
  },
  {
    "id": 20340625,
    "name": "label 5"
  },

  {
    "id": 20340730,
    "name": "label 7"
  },
  {
    "id": 20340733,
    "name": "label 8"
  }
]

var bol = true
old_labels.map(old_curr => {
  bol = true;
  new_labels.map(new_curr => {
  //  console.log(old_curr,'====',new_curr)
    if (old_curr.id == new_curr.id) {
      bol = false;
    }
  })

  if (bol) {
   console.log("old deleted",old_curr)
  }
})


var bol = true
new_labels.map(new_curr => {
  bol = true;
  old_labels.map(old_curr => {
 //   console.log(old_curr,'====',new_curr)
    if (old_curr.id == new_curr.id) {
      bol = false;
    }
  })

  if (bol) {
   console.log("new created ",new_curr)
  }
})

//console.log(l.differenceBy(old_labels,new_labels));

/*
 console.log($.trim('=_dffreee-        abc ==','dfre=_-'));
console.log(l.trim('        abc       '));
*/

/*
var kul = $.rearg(function(a, b,e, c,d) {
  return [a, b, e , c ,d];
}, [2]);
 
console.log(kul('a','b' ,'c', 'd','e'));
*/
 /*var done = $.after(2,x);
 console.log(done(2,3));
  console.log(done(2,3));*/
//var cpy = $.clone(nest);
//console.log(typeof cpy)
//console.log($.gt("8",7));
// console.log($.flip(function() {return $.toArray(arguments)})('1','2','3'));
// console.log($.toArray({'a':"1", 'b':"2"}))
// console.log($.inRange(6,0,10));
// console.log($.shuffle(array));
// console.log($.union(users,users1));
// console.log($.size(num));
// console.log($.unzip(nest));
// console.log($.dropRight(sample,10));
// console.log($.drop(sample,0));
// console.log($.concat(array,[undefined,null],0,false,true,4,5,x,users));
// console.log($.chunk(["a", "c" ,"x","d","z"],3.9));
// console.log($.compact([null,0,false,undefined,"","d"]));
// console.log($.mean([4,3,4]));
 //console.log($.add("2",x));