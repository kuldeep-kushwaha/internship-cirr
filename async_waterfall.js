var waterfall = require('async-waterfall');
var name="kuldeep";
var op={};
waterfall([
    function(callback){
         op.name="kuldeep";
      callback(null,op);
    },
    function(op, callback){
        op.age="25"
      callback(null,op);
    },
    function(op, callback){
      // arg1 now equals 'three'
      op.add="vasai"
      callback(null, op);
    }
  ], function (err, result) {
    // result now equals 'done'
    console.log("result--",result)
  });
