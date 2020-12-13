const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category : String,
    subcategory : String,
    name : String,
    current_price : String,
    raw_price : String,
    currency : String,
    discount : String,
    likes_count : String,
    brand : String,
    brand_url : String,
    variation_0_color : String,
    variation_1_color : String,
    variation_0_thumbnail : String,
    variation_0_image : String,
    variation_1_thumbnail : String,
    variation_1_image : String,
    image_url : String,
    id : String
    
})
module.exports = mongoose.model('Product', productSchema);