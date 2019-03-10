require("../models/Users");

module.exports = {

    ping: function (req, res) {
        return res.status(200).json("Hello! [API]");
    },

    login: function(req, res) {
        return res.status(200).json("LoginAPI!");
    },

    currentUser: function(req, res){
        return res.status(200).json("k");
    },

    createAccount: function(req, res) {
        return res.status(200).json("createAccAPI!");
    },

    CreatePost: function(req, res) {
        return res.status(200).json("createPostAPI!");
    },

    CommentOnPost: function(req, res) {
        return res.status(200).json("commentAPI!");
    },

    ListPosts: function(req, res) {
        return res.status(200).json("listPosts!");
    }

};
