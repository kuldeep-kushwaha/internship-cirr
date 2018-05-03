


var mongo = require('mongodb').MongoClient

var url='mongodb://localhost:27017/learnyoumongo';
    mongo.connect(url, function(err, database) {
      // db gives access to the database

      if(err) throw err
  //    console.log(database);

      const myAwesomeDB = database.db('learnyoumongo');
      myAwesomeDB.collection('parrots').find({
        age: {
          $gt: +process.argv[2]
        }
      }).toArray(function(err, results){
        console.log(results);
        database.close();
        //res.json(200, {'flag': true});
     });

  
    })
