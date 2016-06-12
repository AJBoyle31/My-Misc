var mongo = require('mongodb').MongoClient
    var first = process.argv[2];
    var last = process.argv[3];
    var insertion = {firstName: first, lastName: last};
    var url = 'mongodb://localhost:27017/learnyoumongo';
    
mongo.connect(url, function(err, db){
    if(err) throw err
    var collection = db.collection('docs');
    collection.insert(insertion, function(err, data){
        if(err) throw err;
        console.log(JSON.stringify(insertion));
        db.close();
})
})
