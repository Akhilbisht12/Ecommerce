const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const passport = require('passport');
const LocalStratergy = require('passport-local');
const bodyParser = require('body-parser');
const Product = require('./models/Product');
const User = require('./models/User');
var upload = multer({ dest: './client/public/uploads/' });
const DataSet = require('../DataSet');

const app = express();
app.use(require("express-session")({
  secret: "This is the website for lores.in",
  resave: false,
  saveUninitialized: false
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

app.post('/api/uploadProduct/',upload.single('image'), function(req, res){
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
    email : req.body.email
  });

  User.register(user, req.body.password, (err, user)=>{
    if(err)return res.status(400).json({success : false, err})
    else return res.status(200).json({success : true});
  })
})

app.post('/api/signin/', (req,res)=>{
  console.log('hit')
passport.authenticate('local', function(err,user,info){
  if(err){
    console.log(err);
    const info = {err, msg : 'Something Went Wrong. Try Again!!'}
    return res.status(400).json({success : false, info})
          }
  else if(!user){
    const msg= 'invalid credentials';
    return res.status(400).json({success : false, msg})
  }
  else if(user){
    console.log(user);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log('listening On ' + PORT)});