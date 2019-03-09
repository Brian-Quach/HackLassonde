//const db = require("../models");
const axios = require("axios");


module.exports = {
    
  test: function(req, res) {
    return res.status(200).json("Hello!");
  }
  
};
