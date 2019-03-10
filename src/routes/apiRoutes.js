//const controller = require("../controllers/apiController");
const account = require("../controllers/accountController");
// const mongoose = require('mongoose');
const fs = require('fs');

const userAccount = require("../models/Users");

// image upload package



module.exports = function(app){

  

    app.get("/test", function(req, res){
        return res.json('hello');
    });

    app.post("/createAccount", account.createAccount);
    app.post("/login", account.login);


};
