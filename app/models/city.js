var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CitySchema = new Schema({
	name: { type: String, required: false, index: { unique: true }}, 
	numTownhall: Number,
	numSuperMarket: Number,
	numRestaurant: Number,
	numExpoCenter: Number,
	numTrainStation: Number,
	currencyLevel: Number
});


module.exports = mongoose.model('City', CitySchema);