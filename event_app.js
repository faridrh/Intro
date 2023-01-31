const EventEmitter = require('events'); 

const myEmitter = new EventEmitter();
let n= 0;

someFunction = function (){
  n++;
  console.log(`Value of n is, ${n}`);
}
myEmitter.on('Some event', someFunction);


handleError = function (errorCode){
    console.log('Error is ', errorCode);
}

myEmitter.on('error', handleError);
myEmitter.emit('error', 9);

myEmitter.emit('Any event');
myEmitter.emit('Some event');
myEmitter.emit('Some event');