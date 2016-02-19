require('../models/Users');
var express = require('express');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req,res,next) {
  console.log(req.body);
  User.findOne({email:req.body.email,password:req.body.password},'_id username',function (err,User) {
    if(err){
      res.json({msg:err});
    }
    else {
      res.json({user:User});
    }
  });
});

module.exports = router;
