const router = require("express").Router();
const postController = require("../controllers/postController");
const axios = require("axios");

// API Routes

router.route("/test")
.get(postController.test);


// If no API routes are hit, send the React app

module.exports = router;
