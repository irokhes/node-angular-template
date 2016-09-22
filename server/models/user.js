var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var userSchema = new mongoose.Schema({
    email: {String},
    password:{String}
});

var User = module.exports = mongoose.model('User', userSchema); 
