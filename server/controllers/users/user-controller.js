'use strict';
let BaseController = require('../base-controller');

class UserController {
    static register(req, res, next){
        return BaseController.responseJSON(res,{token:'2039432;dafhsfk9-028', _id:'20938403498'}, next);
    }
}

module.exports = UserController;