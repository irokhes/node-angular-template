'use strict';
let should = require('should');
let assert = require('assert');
let promise = require('bluebird');
let request = require('supertest');
let config = require('../../../config/appconfig.js');

let baseurl = config.server.url + ':' + config.server.port;
let url = '/api/user/';
let _userEmail = 'user@email.com';

describe('/api/user', ()=>{
    describe('register', ()=>{
	    it('should register correctly and return the id and the token', function(done) {
	        request(baseurl).post(url + 'register/').send({
	            email: _userEmail,
	            password: 'password',
                name: 'user test',
	        }).expect(200).expect('Content-type', /json/).end(function(err, res) {
	            if (err) {
	                throw err;
	            }
	            should.exists(res.body.data._id);
	            should.exists(res.body.data.token);
	            done();
	        });
	    });
    });
})
