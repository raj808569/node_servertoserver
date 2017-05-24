var gpio= require("gpio");
var pyshell=require('python-shell');
var express= require('express');
var app=express();
var http= require('http').Server(app);
var io= require('socket.io')(http);
app.use(express.static(__dirname + '/public'));
app.set('port',(process.env.PORT||8080));
http.listen (app.get('port'),function() {
  console.log("listening to port number "+app.get('port'));
});
io.on('connection', function (socket) {
	console.log('Client connected.');
	
	// 'turnlight1on'
	socket.on('turnlight1on', function (message) {
        pyshell.run('b.py',function(err){
						if(err) throw err;
					});
    });
	
	//Turnlight2on
	socket.on('turnlight2on', function (message) {
        pyshell.run('d.py',function(err){
						if(err) throw err;
					});
    });
	
	//Fanon
	socket.on('fanon', function (message) {
        pyshell.run('f.py',function(err){
						if(err) throw err;
					});
    });
	
	//Turnlight1off
	socket.on('turnlight1off', function (message) {
       pyshell.run('a.py',function(err){
						if(err) throw err;
					});
    });
	
	//Turnlight2off
	socket.on('turnlight2off', function (message) {
		pyshell.run('c.py',function(err){
						if(err) throw err;
					});
    });
	
	//fanoff
	socket.on('fanoff', function (message) {
		pyshell.run('e.py',function(err){
						if(err) throw err;
					});
    });
	
	//Alllightson
	socket.on('alllightson', function (message) {
		pyshell.run('b.py',function(err){
						if(err) throw err;
					});
		pyshell.run('d.py',function(err){
						if(err) throw err;
					});
    });
	
	//Alllightsoff
	socket.on('alllightsoff', function (message) {
		pyshell.run('a.py',function(err){
						if(err) throw err;
					});
		pyshell.run('c.py',function(err){
						if(err) throw err;
					});
    });
	
	//Alldeviceson
	socket.on('alldeviceson', function (message) {
		pyshell.run('b.py',function(err){
						if(err) throw err;
					});
		pyshell.run('d.py',function(err){
						if(err) throw err;
					});
		pyshell.run('f.py',function(err){
						if(err) throw err;
					});
	});
	
	//Alldevicesoff
	socket.on('alldevicesoff', function (message) {
		pyshell.run('a.py',function(err){
						if(err) throw err;
					});
		pyshell.run('c.py',function(err){
						if(err) throw err;
					});
		pyshell.run('e.py',function(err){
						if(err) throw err;
					});
	});
	
});