var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'ARTACK' });

var data = {
  title: "ANTARTICA",
  blogs: Posts,
  message: false,
  intro: "The only Blog to find the coolest Art"
};

res.render("index", data)
});
module.exports = router;
