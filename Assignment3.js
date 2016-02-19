
var events = require('events');
//create an event emitter object
var eventEmitter = new events.EventEmitter();

//create an event handler
var connectionHandler=function connected(){
	console.log('Connection successful');
	//Fire the data received event
	
}

//Bind the connection event with the handler . Firing the event with the event handler
eventEmitter.on('connection',connectionHandler);

var dataReceived=function data(){
	console.log('Data Received successful');
	//Fire the data received event
}


//Bind the data_received event with the handler
eventEmitter.on('data_received',dataReceived);

//Fire the connection event handler or Registering an event
eventEmitter.emit('connection');

//Fire the data_received event handler
eventEmitter.emit('data_received');
console.log('Program ended');


