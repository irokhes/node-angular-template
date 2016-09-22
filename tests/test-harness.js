'use strict';
const db = require('../config/db.js');
const mongoose = require('mongoose');

let User = require('../server/models/user');

exports.cleanUp = function(){
    return User.remove({}).exec();
}