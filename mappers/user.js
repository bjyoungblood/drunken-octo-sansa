'use strict';

var GreatScott = require('great-scott'); // !!!

export default GreatScott.createDataSource({

  model : require('models/user'),

  createUser : function(model) {
    var query = this.builder
      .insert()
      .into('users')
      .setFields(model.toObject())
      .returning('*');

    return this.execute(query);
  },

});
