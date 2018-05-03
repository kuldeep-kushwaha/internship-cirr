


var mongo = require('mongodb').MongoClient

var url='mongodb://localhost:27017/learnyoumongo';
    mongo.connect(url, function(err, database) {
   
      var newDoc
      if(err) throw err

      const myAwesomeDB = database.db('learnyoumongo');
      var collection = myAwesomeDB.collection('docs');
      newDoc = {'firstName':process.argv[2],'lastName':process.argv[3]};
      collection.insert( 
          newDoc
     ,function(err, data) {
        // handle error
       console.log(JSON.stringify(newDoc));
        // other operations
        database.close();
      })

    })
