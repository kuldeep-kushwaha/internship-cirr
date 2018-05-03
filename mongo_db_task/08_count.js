


var mongo = require('mongodb').MongoClient

var url='mongodb://localhost:27017/learnyoumongo';
    mongo.connect(url, function(err, database) {
      // db gives access to the database

      if(err) throw err
  //    console.log(database);

      const myAwesomeDB = database.db('learnyoumongo');
     myAwesomeDB.collection('parrots').count({
        age: {
          $gt: +process.argv[2]
        }
      },function(err, count) {
        // handle error
       console.log(count);
        // other operations
        database.close();
      })
 // console.log(z);
    })