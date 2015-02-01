'use strict';

var assert = require('assert');

var _ = require('lodash');
var Avery = require('avery');
var Joi = require('joi');
var Promise = require('bluebird');
var bcrypt = require('bcrypt');

const BCRYPT_WORK_FACTOR = 10;

Promise.promisifyAll(bcrypt);

var UserProto = Avery.Model({

  name : 'User',

  defaults : {
    id : null,
    email : null,
    password : null,
    firstName : null,
    lastName : null,
  },

  validate : Joi.object().keys({
    id : Joi.number(),
    email : Joi.string().email(),
    password : Joi.string(),
    firstName : Joi.string().allow(''),
    lastName : Joi.string().allow(''),
  }),

  virtuals : {
    fullName : function() {
      return this.get('firstName') + ' ' + this.get('lastName');
    },
  },

});

export default class User extends UserProto {

  comparePassword(pwToCompare) {
    assert(_.isString(pwToCompare), 'password to compare must be a string');

    return bcrypt.compareAsync(pwToCompare, this.get('password'));
  }

  setPassword(password) {
    return bcrypt.hashAsync(password, BCRYPT_WORK_FACTOR)
      .then((hash) => {
        return this.set('password', hash);
      });
  }

}
