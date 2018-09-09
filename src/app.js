'use strict';

var express=require('express');
var parser=require('body-parser');
var socket=require('socket.io');
var passport=require('passport');


var app=express();

require('./database.js');
require('./config/passport.js');
app.use('/',express.static('public'));
app.use(parser.json());

const user=require('./api/user.js');


app.use(passport.initialize());

app.use('/api',user);

var server=app.listen(8001,function(){

	console.log('Chat Bot running on port 8000');
});


var io=socket(server);

io.on('connection',function(socket){

	socket.on('chat',function(data){
		io.sockets.emit('chat',data);
	});

	socket.on('feedback',function(data){

		socket.broadcast.emit('feedback',data);
	});

});