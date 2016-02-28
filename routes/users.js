require('../models/Users');
var express = require('express');
var mongoose = require('mongoose');
var User1 = mongoose.model('User1');
var crypto = require('crypto')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req,res,next) {
 // console.log(req.body);
 var passw=req.body.password;
 //console.log(passw);
 crypto.pbkdf2(passw, 'Salt', 100, 30, function (err, key) {
        if (err) {
            console.log(err);
            next(err);

        }
        passw = key.toString('hex');
        console.log(passw);
  User1.findOne({email:req.body.email,password:passw},'_id username',function (err,User) {
    if(err){
      res.json({msg:err});
    }
    else {
      //res.json({msg:User1});
      //console.log(User1);
      res.send('user found');
    }
  });
});
});

module.exports = router;
