//const userAccount = require("../models/Users");
//const mongoose = require('mongoose');
const Datastore = require('nedb');
const fs = require("fs");
const multer = require("multer");
const Posts = new Datastore({ filename: './storage/Posts.db', autoload: true });


module.exports = {

    ping: function (req, res) {
        return res.status(200).json("Hello! [Post Controller]");
    },

    createPost: function(req, res) {
        let userName = req.body.userName;
        let title = req.body.title;
        let desc = req.body.desc;
        //let image = req.body.image;
        let image = 'TODO';
        let location = req.body.location;

        let newPost = new NewPost(userName, title, desc, image, location);

        Posts.insert(newPost, function(err, doc) {
            if(err) return res.status(501).json("Failed to create post :(");
            return res.status(200).json('Post Created');
        });
    },


    deletePost: function(req, res) {
        let postId = req.body.postId;

        Posts.remove({ _id: postId }, function(err, numDeleted) {
            if(numDeleted === 0) return res.status(501).json("Couldn't find post :(");
            return res.status(200).json("Post deleted!");
        });
    },

    viewAllPosts: function(req, res) {
        Posts.find({}).exec(function(err, posts) {
            if(err) return res.status(502);
            let allPosts = [];
            posts.forEach(function(post) {
                // TODO: Format the post
                allPosts.push(post);
            });
            return res.status(200).json(allPosts);
        });
    },

    viewPost: function(req, res) {
        let postId = req.body.postId;

        Posts.findOne({ _id: postId }, function(err, doc) {
            if(err) return res.status(501).json("Couldn't find post :(");
            return res.status(200).json(doc);
        });
    }


};

NewPost = function(user, title, desc, image, location){
    this.user = user;
    this.title = title;
    this.content = desc;
    this.image = image;
    this.location = location;
};
