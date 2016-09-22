'use strict';

const BaseService = require('../base-service.js');
const scrypt = require('scrypt');
const util = require('util');
const promise = require('bluebird');
const jwt = require('jwt-simple');
const moment = require('moment');

class AuthService extends BaseService{
    constructor(){
        super();
        this._secret = 'plearnandgrow';
        this._keyEncoding = 'ascii';
        this._kdfEncoding = 'hex';
        this._tokenDuration = 10;
    }
    checkPassword(kdfed, password) {
        return new promise((resolve, reject) =>{
            let kdfResult = new Buffer(kdfed, this._kdfEncoding);
            scrypt.verifyKdf(kdfResult, new Buffer(password), (err, result) =>{
                if (err) {
                    if(err.scrypt_err_code === 11)
                    {
                        return resolve(false);
                    }
                    return reject(err);
                }
                if (result) {
                    return resolve(true);
                } else {
                    return resolve(false);
                }
            });
        });
    };
    generateToken(email, _id){
        let secret = this._secret;
        let payload = {
            email: email,
            _id: _id,
            expirationDate: moment().add(this._tokenDuration, 'years')
        };
        let token = jwt.encode(payload, secret);
        return token;
    }
    generatePassword(password) {
        var self = this;
        return new promise(function(resolve, reject) {
            scrypt.kdf(password, {
                N: 1,
                r: 1,
                p: 1
            }, function(err, result) {
                if (err) {
                    return reject(err);
                } else return resolve(result.toString(self._kdfEncoding));
            });
        });
    };
}
module.exports = AuthService;