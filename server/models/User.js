const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    username : String,
    email : String,
    password : String,
    image : {
        type : String,
        default : 'http://gms.upgrate.in/wp-content/uploads/2020/12/user.png'
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        default : 'Customer'
    },
    address : {
        flat : String,
        street : String,
        locality : String,
        landmark : String,
        pincode : String,
        city : String,
        state : String,
        country : String
    }
})

userSchema.plugin(passportLocalMongoose,
    { usernameField : 'email'});

module.exports = mongoose.model('User', userSchema);