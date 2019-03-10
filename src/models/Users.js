const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = Schema({
    user: String,
    password: String
});

UsersSchema.methods.setPassword = function(password) {
    this.password = password;
};

UsersSchema.NewUser = function(userName, password){
    this.user = userName;
    this.password = password;
};



module.exports = UsersSchema;