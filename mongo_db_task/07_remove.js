


var mongo = require('mongodb').MongoClient

var url='mongodb://localhost:27017/learnyoumongo';
    mongo.connect(url, function(err, database) {
   
      var newDoc
      if(err) throw err

      const myAwesomeDB = database.db(process.argv[2]);
      var collection = myAwesomeDB.collection(process.argv[3]);
   //   newDoc = {'firstName':process.argv[2],'lastName':process.argv[3]};
      collection.remove( 
        { 
            "_id":process.argv[4]
    }
     ,function(err, data) {
        // handle error
      // console.log(JSON.stringify(newDoc));
        // other operations
        database.close();
      })

    })
