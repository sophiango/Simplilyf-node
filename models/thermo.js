var mongoose = require ('mongoose');

var ThermoSchema = mongoose.Schema({
  device_id : text,
	name : text,
  where_id : text,
	target_temperature_f : int,
	target_temperature_c : double,
	target_temperature_high_f : int,
  target_temperature_high_c : double,
	target_temperature_low_f : int,
	target_temperature_low_c : double,
  away_temperature_high_f : int,
	away_temperature_high_c : double,
	away_temperature_low_f : int,
	away_temperature_low_c : double,
  ambient_temperature_f : int,
	ambient_temperature_c : double,
  humidity : int,
  can_cool : boolean,
	can_heat : boolean,
	has_leaf : boolean,
	hvac_mode : text,
	is_using_emergency_heat : boolean,
	has_fan : boolean,
  timestamp : timestamp
});

module.exports = mongoose.model('Thermo', ThermoSchema);
