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
app.use(express.urlencoded(({ extended: false })));

//HTTP Routes

///ROUTES RELATING TO CONTACT FORM
//Get all Contact Messages
app.get('/contact', (req,res)=>{
    Contact.findAll().then((results)=>{
        res.status(200).send(results);
    }).catch((err)=>{
        res.status(500).send(err)
    });
});

//Create a Message
app.post('/contact', (req, res)=>{
    let newMessage = req.body;
    Contact.create(newMessage).then((result)=>{
            res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

//ROUTES RELATED TO PRODUCTS & SHOP

//Filter products


//Find a product by link or in the url




//Web Server
app.listen(4000, function(){
    console.log('Server running on port 4000.');
});