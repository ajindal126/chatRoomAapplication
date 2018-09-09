'use strict';

var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({

	name:{type:String,required:true},
	username:{type:String,required:true},
	email:{type:String,reuired:true},
	password:String
});


var model=mongoose.model('user',userSchema);

module.exports=model;