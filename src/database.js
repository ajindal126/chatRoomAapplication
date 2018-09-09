'use strict';

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ChatApp',{useNewUrlParser:true},function(err){

	if(err){
		console.log("Failed mongodb connection");
	}
	else{
		console.log("Successfull mongodb connection");
	}
});