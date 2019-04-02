var express = require('express');
var router = express.Router();
var Posts = ('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'ARTACK' });

var data = {
  title: "ARTACK",
  posts: Posts,
  message: false
};

res.render("index", data)
});
module.exports = router;
