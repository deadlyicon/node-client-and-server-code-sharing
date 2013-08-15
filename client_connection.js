var User = require('./user')

ClientConnection = {
  save: function(arg){
    console.log('on the client', arg);
  }
}

User.connection = ClientConnection
