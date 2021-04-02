const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    productId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    }],
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})
module.exports = mongoose.model('Order', OrderSchema);