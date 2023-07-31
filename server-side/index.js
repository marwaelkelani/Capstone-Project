//Import Modules
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
const Contact = require('./models/contact');

//Test the Database
config.authenticate().then(()=>{
    console.log('Database is connected!')
}).catch((err)=>{
    res.status(500).send(err);
});

//Middleware
app.use(cors());
app.use(express.json());


//HTTP Routes
//Get all Contact Messages
app.get('/contact', (req,res)=>{
    Contact.findAll().then((results)=>{
        res.status(200).send(results);
    }).catch((err)=>{
        res.status(500).send(err)
    });
})


//Web Server
app.listen(4000, function(){
    console.log('Server running on port 4000.');
});