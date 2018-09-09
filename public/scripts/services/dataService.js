'use strict';

angular.module('ChatApp')

.service('dataService',function($http){

	this.createUser=function(user,cb){
		$http.post('/api/signup',user).then(cb,function(res){
		
				M.toast({html:res.data.message});
			
		});
	};

	this.loginUser=function(userLoginDetails,cb){
		$http.post('/api/login',userLoginDetails).then(cb,function(res){
		
				M.toast({html:res.data.message});
			
		});
	};

	this.getUserDetails=function(id,cb){

		$http.get('/api/userDetails/'+id).then(cb);
	}
});	