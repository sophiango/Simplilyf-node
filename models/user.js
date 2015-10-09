var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  user_id : text,
  first_name : text,
  last_name : text,
  city : text,
  state : text,
  country : text,
  thermostats : [{
    thermo_id : text
  }]
});

module.exports = mongoose.model('User',UserSchema);
