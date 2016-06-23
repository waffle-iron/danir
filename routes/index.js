var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/marketing',function (req,res) {
  res.render('marketing',{title:"Marketing"})
});


router.get('/contacts',function (req,res) {
  res.render('contacts',{title:"Contacts"})
});



module.exports = router;
