const express = require("express");
const path = require("path");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const apiRoutes=require("./routes/apiRoutes");
const app = express();

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const mongoose=require("mongoose");
const uri = "mongodb+srv://Brian:hacklassonde@hlassonde-x6o9m.gcp.mongodb.net/test?retryWrites=true";


// Use apiRoutes
app.use("/api",apiRoutes)

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;


app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});



