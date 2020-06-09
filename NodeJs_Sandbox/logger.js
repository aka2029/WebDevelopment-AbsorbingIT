const EventEmitter = require("events");
const uuid = require("uuid"); //creates a certain form of id

// console.log(uuid.v4()); //this generates random id

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg: msg }); //msg:msg is same as writing msg
  }
}

module.exports = Logger;
