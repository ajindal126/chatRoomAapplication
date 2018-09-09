'use strict';



angular.module('ChatApp')
.controller('dashboardctrl',function($scope,dataService,$stateParams,$state){



	var id=$stateParams.userId;

	dataService.getUserDetails(id,function(res){
		if(res){
			$scope.name=res.data.name;
		}
	});


	var socket=io.connect("http://localhost:8000/#!/dashboard/"+id);


	$scope.sendMessage=function(){

		
		if($scope.message!=null){
			socket.emit('chat',{

			message:$scope.message,
			name:$scope.name
		});	
			$scope.message=null;

		}
		
	}

	$scope.typing=function(){

		socket.emit('feedback',{'feedback':$scope.name+" is typing...."});
	}

	socket.on('chat',function(data){

		document.getElementById('output').innerHTML +='<p><strong>'+data.name+': <strong>'+ data.message+'</p>';
		
		document.getElementById('feedback').innerHTML="";
	});

	socket.on('feedback',function(data){

		document.getElementById('feedback').innerHTML='<p><em><i>'+data.feedback+'</i></em></p>';
	})

});