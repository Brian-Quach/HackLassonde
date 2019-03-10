//const controller = require("../controllers/apiController");
const account = require("../controllers/accountController");
const mongoose = require('mongoose');
const fs = require('fs');

const userAccount = require("../models/Users");


module.exports = function(app){

    const database = mongoose.connection;
    database.on('error', console.error.bind(console, 'MongoDB connection error:'));
    database.once('open', function() {
        console.log("Database Connection Established!");
    });

    app.get("/test", function(req, res){
        return res.json('hello');
    });

    app.post("/createAccount", account.createAccount);
    app.post("/login", account.login);

};
