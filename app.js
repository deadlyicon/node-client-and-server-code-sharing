app = require('express')();
jade = require("jade")

require('./model').connection = require('./server_connection')
User = require('./user');


// // function() {
//   var browserify = require('browserify');
//   var b = browserify();
//   b.add('./user.js');
//   b.bundle().pipe(process.stdout);

// }

app.set("views", __dirname + "/templates")
app.set("view engine", "jade")
app.engine("jade", jade.__express)

app.get('/', function(req, res){
  User.new().save();
  res.render("index.jade");
});

app.get('/application.js', function(req, res){
  res.setHeader('Content-Type', 'application/javascript');

  var browserify = require('browserify');
  var b = browserify();
  b.require('./user.js', {expose: 'user'});
  b.require('./model.js', {expose: 'model'});
  b.add('./client_connection.js');
  // debugger
  b.bundle().pipe(res);
})


app.listen(3000);
console.log('http://0.0.0.0:3000');
