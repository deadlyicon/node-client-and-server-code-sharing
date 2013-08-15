// require('mongoose').connect("mongodb://localhost/test")

var Class = require("Class.js")
module.exports = Class.new(function(Model){

  Model.THIS_IS_THE_MODEL_CLASS = 42;

  this.THIS_IS_THE_MODEL_PROTOTYE = 84;

  this.save = function(){
    this.class.connection.save(this)
  };


});
