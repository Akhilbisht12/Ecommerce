const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.get('/', (req,res)=>{
    res.send('hello');
})

app.post('/api/uploadProduct/',(req, res)=>{
    console.log(req.file);
    // const product = new Product(req.body);
    // product.save((err)=>{
    //     if(err){
    //         res.status(400).json({success : false, err});
    //     }else{
    //         res.status(200).json({success : true});
    //     }
    // })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log('listening On ' + PORT)});