//set variable mongo to hold the mongo module
var mongo = require('mongodb').MongoClient
    //age will hold the age number passed to the script
    var age = process.argv[2]
    //url hold the url that can access the database
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    //connects to the database via the url variable, function is then run with 2 parameters, error and db (database)
    mongo.connect(url, function(err, db) {
      if(err) throw err;
        var parrots = db.collection('parrots');
        parrots.find({
            age: { $gt: +age }
        },{
            name: 1,
            age: 1,
            _id: 0
        }).toArray(function(err, docs){
            if(err) throw err;
            console.log(docs);
            db.close();
        });
});
