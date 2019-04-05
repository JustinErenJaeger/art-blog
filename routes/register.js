var express = require("express");
var router = express.Router();
var users = require("../db.json").users;
var request = require("request");

// GETTING THE REGISTER PAGE
router.get("/", function(req, res, next) {
    res.render("register", {
        title: "Register",
        thisError: req.app.locals.regError,
    });
});

// CREATE A NEW USER
router.post("/", function(req, res, next) {

    // USED USERNAME
    var usernameUsed;

    // SETS ID TO LAST ID IN USERS +1
    var id = users[users.length-1].id;
    id = Number(id)+1;

    // TO CHECK IF THE USERNAME IS ALREADY USED
    var logUser = req.body.username;

    // CHECKING THROUGH USERS FOR USED NAMES
    for(var i = 0; i < users.length; i++){
        // CHECK IF USERNAME ALREADY EXISTS
        if (logUser == users[i].username) {
            usernameUsed = true;
            console.log(usernameUsed);
        }
    }
    // IF USERNAME IS NOT NOT VAILABLE CREATE A NEW MEMBERSHIP ACCOUNT
    if (usernameUsed != true){
        request({
            url:  "http://localhost: 8080/users",
            method: Posts,
            form: {
                id: id,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            },
            function(error, response, body) {
                res.render("register", {message: "Successfully Added"});
            }
        });
        req.app.locals.regError = "registration Successful";

        // GOES TO SIGN IN PAGE AFTER YOU REGISTER
        res.redirect("/sign-in");
    }
    // IF USER IS ALREADY USED (USER NAME TAKEN)
    else if (usernameUsed == true) {
        req.app.locals.regError = "Username Taken";
    }
})

module.exports = router;