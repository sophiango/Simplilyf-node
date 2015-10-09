var mongoose = require ('mongoose');

var LightSchema = mongoose.Schema({
	id : text,
	name : text,
  	currentTS : Date,
	modelid : text,
	on : boolean,
	bri : int,
  	hue : int,
	sat : int,
	reachable : boolean,
  	type : text,
	last_use_date : Date,
	created_date : Date,
	user_mode : text,
 	timestamp : timestamp
});

module.exports = mongoose.model('Thermo', ThermoSchema);