

var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

var loremIpsum1 = { version: '0.1.0',
dependencies: 
 { resumer: { version: '0.0.0' },
   charm: { version: '0.1.2' },
   inherits: { version: '2.0.1' } } }



 var loremIpsum2 =  { workshopper: 
      { version: '0.3.3',
        dependencies: 
         { 'map-async': [Object],
           'tuple-stream': [Object],
           split: [Object],
           through: [Object],
           mkdirp: [Object],
           'colors-tmpl': [Object],
           'terminal-menu': [Object],
           optimist: [Object],
           'pygmentize-bundled': [Object],
           xtend: [Object] } },
     'lorem-ipsum': 
      { version: '0.1.1',
        dependencies: { optimist: [Object], inflection: [Object] } } }

        
   
function getDependencies(tree) {
  var final=[];
  var uniqueArray=[];
  recursively(tree);

function recursively(tree) {  
//      console.log("----------",tree);


  if(typeof tree == 'object')
  {
      var arr=Object.keys(tree);
//      console.log(arr)

      arr.map(function(a){

        //  console.log(a,typeof tree[a])

          if(typeof tree[a] == 'object')
          {
             // console.log("-inside if-------",tree[a])
             
             if(a != 'dependencies')
                  final.push(a+"@"+tree[a].version)

                  recursively(tree[a]);
          }
         
          
      })
      
  }
//    console.log(final);
  //return final;
}

// return final.sort();

uniqueArray = final.filter(function(item, pos) {
  return final.indexOf(item) == pos;
})

return uniqueArray.sort();

}

//   console.log(getDependencies(loremIpsum)); 
//   console.log(getDependencies(loremIpsum1)); 
//   console.log(getDependencies(loremIpsum2)); 

// => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
  
//loremIpsum

module.exports = getDependencies
