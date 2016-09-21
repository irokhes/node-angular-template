var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {String},
    password:{String}
});

var User = module.exports = mongoose.model('User', userSchema); 
