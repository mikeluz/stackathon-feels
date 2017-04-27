var fs = require('fs');
var { findValueOfWords } = require('../public/js/utils');
var api = require('express').Router();
// var models = require('../models');
var Promise = require('bluebird');

api.get('/howamifeeling', function (req, res, next) {
	var feels = fs.readFileSync('feels.txt').toString();
	res.json(feels);
});

api.post('/howamifeeling', function (req, res, next) {
	console.log("in post route");
    var timeStamp = Date();
    var feelFreqs = findValueOfWords(req.body.feels);
    fs.appendFile('feels.txt', (req.body.feels + '\n'));
    res.json("Success");
});

module.exports = api;