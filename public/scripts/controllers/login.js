'use strict';

angular.module('ChatApp')
.controller('loginCtrl',function($scope,dataService,$state){

	var email_regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	var username_regex=/^[a-zA-Z][\w-]+$/;

	var userLoginDetails={};


	

	$scope.login=function(){

	// if(email_regex.test($scope.usernameOrEmail)){

	// 	userLoginDetails.email=$scope.usernameOrEmail;
	// }
	// if(username_regex.test($scope.usernameOrEmail)){

	// 	userLoginDetails.username=$scope.usernameOrEmail;
	// }

	userLoginDetails.username=$scope.usernameOrEmail;

	userLoginDetails.password=$scope.password;

		dataService.loginUser(userLoginDetails,function(res){
				//console.log(res.data[0]._id);
			if(res){
				//console.log(res.data._id);
				$state.go('dashboard',{'userId':res.data._id});
			}
			
		});
	}

});


