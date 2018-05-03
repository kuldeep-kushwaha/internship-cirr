
var fs = require('fs');

var buf=fs.readFileSync(process.argv[2]);
//console.log(buf); process.argv[2]

var strt=buf.toString().split("\n");
//console.log(strt);
console.log(strt.length-1);

