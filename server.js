var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');

var mongoose = require('mongoose');

var app = express();

mongoose.connect(config.database, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('connected to the database');
	}
});

var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.resolve('/public')));

var api = require('./routes/api')(app, express);

app.use('/api', api);

app.get('*', function(req, res) {
	res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(config.port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('listening on port 3000');
	}
});