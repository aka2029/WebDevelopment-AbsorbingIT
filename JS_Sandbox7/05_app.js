// MEDIATOR PATTERN - idea is to have a mediator which is basically a interface for communicating with collegues what we call as mediator objects. The best eg. is THE CHAT ROOM... if you wanna implement this with something like socket.io ; you could do that

const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; //list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // single user message
        to.recieve(message, from);
      } else {
        // mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  };
};

const akash = new User("Akash");
const jeff = new User("jeff");
const sara = new User("sara");

const chatroom = new Chatroom();

chatroom.register(akash);
chatroom.register(jeff);
chatroom.register(sara);

akash.send("Hello Jeff", jeff);
sara.send("Hello Akash, you are the best dev ever!", akash);
jeff.send("Hello Everyone!!");
