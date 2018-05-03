


var mongo = require('mongodb').MongoClient

var url='mongodb://localhost:27017/learnyoumongo';
    mongo.connect(url, function(err, database) {
      // db gives access to the database

      if(err) throw err
  //    console.log(database);

      const myAwesomeDB = database.db('learnyoumongo');
     myAwesomeDB.collection('prices').aggregate([
        { $match: { "size": process.argv[2] }}
      , { $group: {
          _id: 'total' // This can be an arbitrary string in this case
        , total: {
            // $sum is the operator used here
            $sum: '$price'
          },
          avg: {
            // $sum is the operator used here
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        // handle error
       // console.log(results);
        console.log( Number(results[0].avg).toFixed(2));
        database.close();
      //  console.log(results[avg]);
        // => [
        // =>   { _id: 'total', total: 11 }
        // => ]
      })
    });
  