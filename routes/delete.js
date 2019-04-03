var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

router.get('/', function(req, res, next) {
    console.log(req.params.postId);

    // make a post request to our database
    requestAnimationFrame({
        url: "http://localhost:3004/posts" + req.params.postId,
        method: "DELETE",
    },

    function(error, response, body) {
        var data = {
            title: "Art Blog",
            posts: Posts,
            message: "Succesfully Deleted"
        };

        res.redirect("..")
    });
});
