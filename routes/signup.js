require('../models/Users');
var express = require('express');
var mongoose = require('mongoose');
var User1 = mongoose.model('User1');
var crypto = require('crypto');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

router.get('/',function(req,res) {
	res.send('response');
});

router.post('/',function(req,res) {
	var passw = req.body.password;
	console.log(passw);
	 crypto.pbkdf2(passw, 'Salt', 100, 30, function (err, key) {
        if (err) {
            console.log(err);
            next(err);

        }
        passw = key.toString('hex');
        console.log(passw);
        var newuser = new User1();
             newuser._id =  mongoose.Types.ObjectId(new ObjectID());
             newuser.username =req.body.username;
             newuser.email =req.body.email;
             newuser.password = passw;
             newuser.age = parseInt(req.body.age);

        console.log(newuser);
        newuser.save(function(err){
        	if(err){
        		res.json({err:err});
        	}
        		else{
        			//res.json({msg:"User created"});
        		      res.send('sent');
                        }
        		    });
    });	
  
	});

module.exports = router;