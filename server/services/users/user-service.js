'use strict';
const promise = require('bluebird');
const BaseService = require('../base-service.js');
const AuthService = require('../auth/auth-service.js');
const User = require('../../models/user');

module.exports = class UserService extends BaseService{
    register(email, password, name, school){
        let service = new AuthService();
        return new promise((resolve, reject) =>{
            User.findOne({email:email}).exec().then((data) =>{
                if(data !== null){
                    return reject(super.fail('Duplicate user', 409));
                }
                return service.generatePassword(password);
            }).then(hashedpass =>{
                    let user = new User({
                    password: hashedpass,
                    email: email,
                    name: name,
                    school: school
                    });
                    return user.save();
            }).then(user =>{
                    let token = service.generateToken(email, user._id);
                    return resolve({email: email, token:token, _id: user._id});
            }).catch((err) =>{
                    return reject(err);
            });
	    });
    }    
}

