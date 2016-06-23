var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wrapper', { title: 'Express' });
});

//Get hello world page

router.get('/helloworld',function (req,res) {
  res.render('helloworld',{title:"Hello world!"})
});

router.get('/contacts',function (req,res) {
  res.render('contacts',{title:"Contacts"})
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        console.info(docs)
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/cars', function(req, res) {
    var db = req.db;
    var collection = db.get('cars');
    collection.find({},{},function(e,docs){
        console.info(docs)
        res.render('cars', {
            "cars" : docs
        });
    });
});

router.get('/newuser',function(req,res){
  res.render('newuser',{title:'Add new user'});
})

/* POST */

router.post('/adduser',function(req,res){
  var db = req.db;

  var userName = req.body.username;
  var userEmail = req.body.useremail;

  var collection = db.get('usercollection');

  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function(err,doc){
    if (err) {
      res.send("Error occured!")
    }

    else {
      res.redirect("userlist");
    }
  }
  )
})

module.exports = router;
