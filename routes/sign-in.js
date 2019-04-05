// CREATE THE REQUIRED VARIABLES

var express = require("express");
var router = express.Router();
var users = require("../db.json").users;
var request = require("request");

// GETTING THE SIGN IN PAGE
router.get("/", function(req, res, next) {
    res.render("sign-in", {
        title: "Sign-in",
        signInError: req.app.locals.signInError,
    });
});

// SIGN IN
router.post("/", function(req, res, next) {

    // GET INFORMATION FROM THE BODY
    var logUser = req.body.username;
    var logPassword = req.body.password;

    for(var i = 0; i < users.length; i++) {
        // IF USER AND PASSWORD ARE CORRECT
        if((users[i].username == logUser || users[i].email == logUser)
        && users[i].password == logPassword) {
            // NEED TO CREATE A COOKIE
            res.cookie("userId", users[i].id);

            // SETS logUser TO THE CORRECT USERNAME
            logUser = users[i].username;
            console.log(req.cookies);

            // SETS THE CORRECT SIGN IN VARIABLES
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signError = "Log in successful";
            
            // IT MUST REDIRECT TO THE HOME PAGE AFTER SIGN IN
            res.redirect("/");
        }
    };

    // CHECK THAT THE USER HAS SIGNED IN CORRECTLY
    if(req.app.locals.user != logUser) {
        req.app.locals.signInError = "Username or Password is Incorrect";
    };
    res.redirect("/sign-in");
});

module.exports = router;