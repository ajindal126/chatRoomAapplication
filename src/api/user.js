'use strict';

var express=require('express');
var passport=require('passport');
var User=require('../models/user.js');

var router=express.Router();

router.post('/signup',function(req,res){

	User.find({'email':req.body.email},function(err,user){

		if(!err && !user.length){

			User.find({'username':req.body.username},function(error,usern){

				if(!error && !usern.length){

				var newUser=User({

							'name':req.body.name,
							'username':req.body.username,
							'email':req.body.email,
							'password':req.body.password
					});

				newUser.save(function(userErr,userSaved){
					if(userErr){
					
						res.status(500).json({message:userErr.message});
					}
					else{
						res.json(userSaved);
					}
				});

				}
				else if(!err && usern.length){
					error=new Error("Username already present!!");
					res.status(409).json({message:error.message});
				}
				else{
					res.status(500).json({message:error.message});
				}
			});


		}
		else if(!err && user.length){
			err=new Error("Email already present!!");
			res.status(409).json({message:err.message});
		}
		else{
			res.status(500).json({message:err.message});
		}

	});
});

router.post('/login',function(req,res){
	passport.authenticate('local',function(err,user,info){

		if(err){
			res.status(500).json({message:err.message})
		}
		if(user){
			res.json(user);
		}
		else{
			res.status(409).json(info);
		}
	})(req,res);
});
	


router.get('/userDetails/:id',function(req,res){

	var userId=req.params.id;
	User.findById(userId,function(err,user){
		if(err){
			res.status(500).json({message:err.message});
		}
		else{
			res.json(user);
		}
	})
})

module.exports=router;