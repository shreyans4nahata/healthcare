var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    _id:{type:String},
    username:String,
    email:String,
    password:String,
    age:Number
});

module.exports = mongoose.model('User',UserSchema);



