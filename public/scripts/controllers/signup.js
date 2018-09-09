'use strict';

angular.module('ChatApp')
.controller('signupCtrl',function($scope,dataService,$state){

	$scope.createUser=function(user){
			
		dataService.createUser(user,function(res){
			if(res){
				localStorage.setItem('id',JSON.stringify(res.data._id));
				$state.go('dashboard',{'userId':res.data._id});
			}
			
		});
	}
});