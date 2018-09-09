'use strict';

var User=require('../models/user.js');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;


passport.use(new LocalStrategy(function(username,password,done){
	
		//console.log(username);
	    var criteria = (username.indexOf('@') === -1) ? {username: username,password:password} : {email: username,password:password};
		User.findOne(criteria,function(err,user){
			if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found!!'
        });
      }
      
      // If credentials are correct, return the user object
      return done(null, user);
		});	
	
}
));

