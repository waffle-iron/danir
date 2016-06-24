var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Danir.by' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Danir.by' });
});


router.get('/marketing',function (req,res) {
  res.render('marketing',{title:"Danir.by"})
});


router.get('/contacts',function (req,res) {
  res.render('contacts',{title:"Danir.by"})
});



module.exports = router;
