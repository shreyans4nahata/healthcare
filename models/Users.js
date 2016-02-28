var mongoose = require('mongoose');

var User1Schema = new mongoose.Schema({
    _id:{type:String},
    username:String,
    email:String,
    password:String,
    age:Number
});

mongoose.model('User1',User1Schema,'User1');



