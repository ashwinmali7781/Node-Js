const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('please turn off the motor!');
  setTimeout(() => {
    console.log('please turn off the motor! its a reminder');
  }, 3000);

});

console.log("this is runnig");
console.log("this is still runnig");
myEmitter.emit('waterFull');