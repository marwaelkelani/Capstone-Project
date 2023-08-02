//Import Modules
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./config');
const Contact = require('./models/contact');
const Product = require('./models/product');
const Subject = require('./models/subject');
const Type = require('./models/type');
const ProductSubject = require('./models/product_subject');
const ProductType = require('./models/product_type');
const Grade = require('./models/grade');


//Table Associations

///Associations between Products and Subjects
Product.belongsToMany(Subject, {
    through: ProductSubject,
    // foreignKey: 'product_id',
    // otherKey: 'subject_id'
});

Subject.belongsToMany(Product, {
    through: ProductSubject,
    // foreignKey: 'subject_id',
    // otherKey: 'product_id'
});

///Associations between Products and Types
Product.belongsToMany(Type, {
    through: ProductType,
    foreignKey: 'product_id',
    otherKey: 'type_id'
});

Type.belongsToMany(Product, {
    through: ProductSubject,
    foreignKey: 'type_id',
    otherKey: 'product_id'
});

//Associations between Products and Grades
Product.hasMany(Grade,{
    foreignKey: 'product_id',
});


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

//Get all product info
app.get('/products', (req,res)=>{
    let data = {
        include: [Grade, Type]
    }
    Product.findAll(data).then((results)=>{
        res.status(200).send(results);
    }).catch((err)=>{
        res.status(500).send(err);
    });
})


//Filter products


//Find a product by link or in the url




//Web Server
app.listen(4000, function(){
    console.log('Server running on port 4000.');
});