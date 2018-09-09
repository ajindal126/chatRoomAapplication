'use strict';

angular.module('ChatApp',['ui.router'])

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider

	.state('signup',{

		url:'/signup',
		templateUrl:'templates/signup.html',
		controller:'signupCtrl'
	})

	.state('login',{

		url:'/login',
		templateUrl:'templates/login.html',
		controller:'loginCtrl'
	})

	.state('dashboard',{

		url:'/dashboard/:userId',
		templateUrl:'templates/dashboard.html',
		controller:'dashboardctrl'
	})


	$urlRouterProvider.otherwise('/signup');
});