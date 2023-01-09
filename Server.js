//Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const malaysia = require("malaysia-postcodes");
const cors = require("cors");

const findPostcode = malaysia.findPostcode;
const app = express();

//port
const port = process.env.PORT || 10000;

//Database
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/internship";
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true }, (err) =>{
    if(err){
        console.log(err.message)
    } else {
        console.log("mongdb is connected");
    }
});
mongoose.Promise = global.Promise;
db.on('error', (err) => {
    console.log(err.message)
});
db.on('disconnect', () => {
    console.log('MongoDB disconnected')
});

//Schema models
const Details = require("./models/UserDataSchema.js");

// cors
app.use(cors())

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("public/index.html")
})

app.post('/postcode', (req, res) => {
    const search = (Object.values(req.body));
    const data = findPostcode(search[0]);
    if (!search){
        return false;
    } else{
        res.status(200).json(data);
    }
});

app.post('/register', (req, res)=>{
    Details.create(req.body, (error, data)=>{
        if(error){
            console.log(error.message);
        } else {
            console.log(data);
        };
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})