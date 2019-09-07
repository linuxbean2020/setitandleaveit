const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")))

// const storage = multer.diskStorage({
//     destination: function(req,file,cb){
//     cb(null,'./react/public/upload')
//     },
//     filename : function(req,file,cb){
//     cb(null,file.originalname);
//     console.log('filefile',file);
//     }
//     })
//     var upload = multer({storage:storage});
    
app.use((req, res, next) => {
    // res.status(200).send('Welcome to the egeage api');
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "*"
    );
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});

const userRoute = require('./API/routes/userRoutes');
app.use('/sellandleave',userRoute);

module.exports = app;