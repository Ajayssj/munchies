const exec = require('child_process').exec;
const fs = require('fs');
var copydir = require('copy-dir');
var mkdirp = require('mkdirp');
const dest = __dirname+'/frontEnd/dist/Munchies';

const testscript = exec("cd frontEnd/ && ng build");

testscript.stdout.on('data', function(data){
    console.log("data",data); 
    // sendBackInfo();
	console.log("dest",dest);
	if(!fs.existsSync(dest)){
	  mkdirp.sync(dest)
	};
	copydir.sync(dest, __dirname + '/client');
	console.log('content copied ... ');

});

testscript.stderr.on('data', function(data){
    console.log("err",data);
    // triggerErrorStuff(); 
});