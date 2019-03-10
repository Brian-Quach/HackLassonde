const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('static'));

// NeDB for PoC
const Datastore = require('nedb');

const mongoose = require('mongoose');
const mongoDb = "mongodb+srv://Brian:hacklassonde@hlassonde-x6o9m.gcp.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDb, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
//const apiRoutes =
require('./routes/apiRoutes')(app);
//app.use("/",apiRoutes);


app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    next();
});

app.use(function (req, res, next){
    console.log("HTTP Response", res.statusCode);
    next();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    console.log("Started server on port", PORT);
});



