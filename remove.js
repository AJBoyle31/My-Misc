var mongo = require('mongodb').MongoClient

var collName = process.argv[3];
var id = process.argv[4];

mongo.connect('mongodb://localhost:27017/' + process.argv[2], function(err, db){
    if(err) throw err;
    var collection = db.collection(collName);
    collection.remove({
        _id: id
    }, function(err, data){
        if(err) throw err;
        db.close();
    })
})
