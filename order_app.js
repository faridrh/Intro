const EventEmitter = require("events");

const myEmitter = new EventEmitter();

order = function (food){
    console.log (`Order placed for ${food}`)
}

doorbell = function () {
    console.log ("RING RING!");

}
payment = function (food){
    console.log (`Enjoy your ${food}`);
}


myEmitter.on('order', order)
myEmitter.on('doorbell', doorbell)
myEmitter.on('payment', payment)

placeOrder = function (food) {
    myEmitter.emit("order", food);
    myEmitter.emit("doorbell");
    myEmitter.emit("payment", food);
  }
placeOrder('doner');