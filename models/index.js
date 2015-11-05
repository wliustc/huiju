var mongoose = require('mongoose');
var config   = require('../config');

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./goods');

exports.User         = mongoose.model('User');
exports.Goods        = mongoose.model('Goods');

