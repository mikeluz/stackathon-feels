var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');

// var nunjucks = require('nunjucks');

var path = require('path');
module.exports = app;

var fs = require('fs');
var { findValueOfWords } = require('./public/js/utils');

// app.set('view engine', 'html');
// app.engine('html', nunjucks.render);
// var env = nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use('/', function(req, res, next) {
	console.log("BACKEND");
	console.log("req", req);
    var timeStamp = Date();
    var feelFreqs = findValueOfWords(req.body.feels);
    fs.appendFile('feels.txt', (req.body.feels + '\n'));
    res.json("Success");
});

app.use('/api', require('./server/api'));

// app.use('/', function (req, res, next) {
// 	res.render('textbox');
// });

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send(err.message);
});