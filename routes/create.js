// GET THE REQUIRED VARIABLES
var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require("request");

// GET CREATE PAGE

router.get("/", function(req, res, next) {
    res.render("create", {
        title: "Create"
    });
});

// POST AD CREATE A REQUEST

router.post("/", function(req, res, next) {
    var posts = Posts.posts; 

    // GET THE ID OF THE LAST POST
    var id = Posts[Posts.length-1].id;

    // GET ID FOR THE LAST POST -ADD SON-
    id = Number(id)+1;

    // GETTING THE DATE
    var newDate = new Date();

    // CREATE DATE FORMAT
    var date = "${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}";

    // GET THE CONTENT/ DESCRIPTION
    var content = req.body.content;

    // TEXT IS USEDNFOR THE DESCRIPTION
    // TURNS THE OBJECT TO A STRING

    var text = JSON.stringify(content);

    // DESCRIPTION VARIABLE
    var description;
    description = text.charAt(1);

    // GETS THECHARACTER OR CHAR FROM THE STRING
    for (let i = 2; i < 200; i++) {
        description += text.charAt(i);
    }

    request({
        ur: "localhost: 8080",
        method: Posts,
        form: {
            id: id,
            date: date,
            title: req.body.title,
            image: req.body.image,
            description: description + "...</p>",
            content: content,
            aurthor: req.app.locals.user,
        },
        function(error, response, body) {
            res.render("index", {message: "Successfully Added"});
        }
    })

    // REDIRECT TO HOMEPAGE AFTER YOU CREATE YOUR POST
    res.redirect("..");
});

module.exports = router;