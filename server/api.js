var fs = require('fs');
var { findValueOfWords } = require('../public/js/utils');
var api = require('express').Router();
// var models = require('../models');
var Promise = require('bluebird');

api.get('/howamifeeling', function (req, res, next) {
	var feels = fs.readFileSync('feels.txt').toString();
	res.send(feels);
});

api.post('/howamifeeling', function (req, res, next) {
    var timeStamp = Date();
    var feelFreqs = findValueOfWords(req.body.feels);
    fs.appendFile('feels.txt', (req.body.feels + '\n'));
    res.redirect('/');
});

module.exports = api;