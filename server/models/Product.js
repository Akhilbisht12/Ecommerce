const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    brand : String,
    price : Number,
    Description : Number,
})
const Product = mongoose.model('Product', productSchema);
module.export = {Product}  ;