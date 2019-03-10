//const userAccount = require("../models/Users");
//const mongoose = require('mongoose');
const Datastore = require('nedb');
const Users = new Datastore({ filename: './storage/Users.db', autoload: true });
Users.ensureIndex({ fieldName: 'userName', unique: true });

module.exports = {

    ping: function (req, res) {
        return res.status(200).json("Hello! [Account Controller]");
    },

    createAccount: function(req, res) {
        let userName = req.body.userName;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;

        let newAccount = new NewUser(userName, password, firstName, lastName, email);

        Users.insert(newAccount, function(err, doc) {
            if(err) return res.status(501).json(userName + " already exists!");
            return res.status(200).json('Inserted ' + doc.userName);
        });
    },

    login: function(req, res) {
        let userName = req.body.userName;
        let password = req.body.password;

        Users.findOne({userName: userName}, function (err, doc) {
            if (err) return res.status(501).json(userName + " doesn't exists!");
            if (doc.password !== password) return res.status(401).json('Incorrect password!');

            return res.status(200).json("Success!");
        });
    },


};

NewUser = function(userName, password, firstName, lastName, email){
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
};
