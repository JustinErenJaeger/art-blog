// CREATE THE REQUIRED VARIABLES

var express = require("express");
var router = express.Router();
var request = require("request");

// GETTING THE SIGN OUT PAGE
router.get("/", function(req, res, next) {
    // SETS DEFAULT
    req.app.locals.login = false;
    req.app.locals.user = "";
    req.app.locals.signIn = "";
    req.app.locals.regError = "";

    // CREATE A COOKIE
    res.clearCookie("userId");
    console.log(req.cookies.userId);

    // REDIRECT TO HOME PAGE AFTER SIGN-OUT
    res.redirect("/");
});

module.exports = router;