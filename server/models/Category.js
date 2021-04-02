const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name : String,
    parent : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    image : String
})
module.exports = mongoose.model('Category', CategorySchema);