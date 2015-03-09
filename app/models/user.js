/* Timely - Daniel Wilson */

// User Model

var mongoose      = require('mongoose');
var findOrCreate  = require('mongoose-findorcreate');

// DB Schema
var userSchema = mongoose.Schema({

  facebookId:  String,
  pic: String,
  name: String,
  todos: [{
    name: String,
    dueDate: String,
    createDate: String
  }]

});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User',userSchema);
