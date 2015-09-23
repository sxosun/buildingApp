var City = require('../app/models/city');

var config = require('../config');

var secretKey = config.secretKey;

module.exports = function(app, express) {
	var api = express.Router();

	api.post('/create', function(req, res){
		var city = new City({
			name: req.body.name,
			numTownhall: req.body.numTownhall,
			numSuperMarket: req.body.numSuperMarket,
			numRestaurant: req.body.numRestaurant,
			numExpoCenter: req.body.numExpoCenter,
			numTrainStation: req.body.numTrainStation,
			currencyLevel: req.body.currencyLevel
		});

		city.save(function(err){
			if(err) {
				res.send(err);
				return;
			}

			res.json({message: 'New City has been created'});
		});
	});


	api.get('/cities', function(req, res) {
		City.find({}, function(err, cities){
			if(err){
				res.send(err);
				return;
			}

			res.json(cities);

		});
			
	});

	return api;
}

