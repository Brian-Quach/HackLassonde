//const controller = require("../controllers/apiController");
const account = require("../controllers/accountController");
const posts = require("../controllers/postController");
const mongoose = require('mongoose');
const fs = require('fs');

const userAccount = require("../models/Users");

const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

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

    app.post("/createPost", posts.createPost);
    app.post("/deletePost", posts.deletePost);
    app.post("/viewAllPosts", posts.viewAllPosts);
    app.post("/viewPost", posts.viewPost);

    app.post('/uploadFile', upload.single('coc.PNG'), (req, res) => {
        res.redirect('/');
    });

};
