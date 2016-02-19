var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    _id:{type:String},
    username:String,
    email:String,
    password:String,
    age:Number
});

mongoose.model('User',UserSchema,'User');



