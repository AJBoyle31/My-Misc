//set variable mongo to hold the mongo module
var mongo = require('mongodb').MongoClient
    //age will hold the age number passed to the script
    var age = process.argv[2]
    //url hold the url that can access the database
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    //connects to the database via the url variable, function is then run with 2 parameters, error and db (database)
    mongo.connect(url, function(err, db) {
      //if there is an error, handle it
      if (err) throw err
      //variable parrots hold the parrots collection, which will make it easier to search for what we are looking for
      var parrots = db.collection('parrots')
      //within the parrots collection, find the age value parameter. within that parameter, return ages greater than the age variable. $gt is greater than
      //that result is then converted to an array and another funtion is called with two parameters, err and docs. if there is an error, it is handled, else
      //the results are logged to the console in an array format. the database is then closed.
      parrots.find({
        age: {
          $gt: +age
        }
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })
