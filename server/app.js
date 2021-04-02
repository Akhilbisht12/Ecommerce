const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const passport = require('passport');
const LocalStratergy = require('passport-local');
const bodyParser = require('body-parser');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');
const Category = require('./models/Category')
var uploadProduct = multer({ dest: './client/public/uploads/products' });
var uploadCategory = multer({ dest: './client/public/uploads/category' });
const DataSet = require('../DataSet');

const app = express();
app.use(require("express-session")({
  secret: "This is the website for eccom.in",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy({
    usernameField: 'email'
  }, User.authenticate()));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://akhil:Akhil@8979@lores-owlah.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", function() {
  console.log("Database connection Successful");
})


app.get('/', (req,res)=>{
    res.send('hello');
})

app.post('/api/uploadProduct/',uploadProduct.single('image'), function(req, res){
    Product.create({
      name : req.body.name,
      company : req.body.company,
      price : req.body.price,
      desc : req.body.desc,
      image : req.file.path,
      category : req.body.category
    },function(product,err){
      if(err)return res.status(400).json({success : false, err})
      else return res.status(200).json({success : true});
    });
})

app.post('/api/register/', function(req,res){
  console.log('hit' + req.body.email);
  const user = new User({
    email : req.body.email,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    username : req.body.firstName+req.body.lastName+Math.floor(1000 + Math.random() * 9000),
    address : {
      flat : req.body.flat,
      street : req.body.street,
      locality : req.body.locality,
      landmark : req.body.landmark,
      pincode : req.body.pincode,
      city : req.body.city,
      state : req.body.state,
      country : req.body.country
    }
  });

  User.register(user, req.body.password, (err, user)=>{
    if(err)return res.status(400).json({success : false, err})
    else return res.status(200).json({success : true, user});
  })
})

app.post('/api/signin', (req,res)=>{
  console.log(req.body)
  passport.authenticate('local', (err,user)=>{
    if(err){
      console.log(err);
      const info = {err, msg : 'Something Went Wrong. Try Again!!'}
      return res.status(400).json({success : false, info})
    }else if(!user){
      const msg= 'invalid credentials';
      return res.status(400).json({success : false, msg})
    }else if(user){
      console.log(user);
      console.log(req.user);
      return res.status(200).json({success : true, user})
          }
  })(req,res)
  }
)

app.get('/api/getProducts', (req,res)=>{
  Product.find({}, (err, product)=>{
    if(err){console.log(err)}
    else{
      res.send(product);
      console.log(product)
    }
  })
})

app.get('/api/getProduct/:id', (req,res)=>{
  Product.findById(req.params.id, (err,product)=>{
    if(err)return res.status(400).json({success : false,err})
    else res.send(product)
  })
})

app.post('/api/deleteProduct/:id', (req,res)=>{
  Product.findByIdAndDelete(req.params.id, (err)=>{
    if(err) return res.status(400).json({success : false, err})
    else return res.status(200).json({success : true})
  })
})

app.post('/api/postOrder', (req,res)=>{
  console.log(req.body)
  Order.create(req.body,function(err,order){
    if(err) return res.status(400).json({success : false, err})
    else return res.status(200).json({success : true, order})
  })
})

app.get('/api/getAllProducts', (req,res)=>{
  Order.find({}).populate('customerId').populate('productId').exec((err,orders)=>{
    if(err) return res.status(400).json({success : false, err})
    res.send(orders)
  })
})

app.get('/api/getAllUsers', (req,res)=>{
  User.find({}, (err, users)=>{
    if(err) return res.status(400).json({success : false, err})
    res.send(users)
  })
})

app.post('/api/uploadCategory',uploadCategory.single('image'), (req,res)=>{
  console.log(req.body)
  Category.create({
    name : req.body.name,
    parent : req.body.parent,
    image : req.file.path
  },(err, category)=>{
    if(err) return res.status(400).json({success : false, err})
    else return res.status(200).json({success : true, category})
  })
})

app.get('/api/getCategory', (req,res)=>{
  Category.find({}).populate('parent').exec((err, category)=>{
    console.log(category)
    if(err) return res.status(400).json({success : false, err})
    else return res.send(category)
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log('listening On ' + PORT)});