var robot = require ("robotjs");
const ioHook = require('iohook');

var keyInputs = "";
var count = 0;

var limit = 50000; //set limit here
var text = "wrote a nodejs script for this guys. paki clone nalang, kaya kaayo nato ni hahaha. \n https://github.com/McBlaise/botbot.git";

ioHook.on('keyup', function(event){

	keyInputs += String.fromCharCode(event.rawcode);

	if(keyInputs.includes('START')){
		
		comment();
		keyInputs = "";

	}

});

ioHook.start();

function comment(){
	robot.typeString(text);
	count++;
	setTimeout(function(){
		
		if(count < limit){
			robot.keyTap("enter");
			comment();
		}

	}, 1000)

}