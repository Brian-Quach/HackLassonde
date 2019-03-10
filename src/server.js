const express = require('express');
const app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));



// NeDB for PoC
const Datastore = require('nedb');


// Multer ================================ upload image
const multer  = require('multer')


 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
const upload = multer({ storage: storage })

app.post('/simage', upload.single('image'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})



// ===============================================
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



