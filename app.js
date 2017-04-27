var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');

var nunjucks = require('nunjucks');

var path = require('path');
module.exports = app;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var env = nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use('/api', require('./server/api'));

app.get('/', function (req, res, next) {
	res.render('textbox');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send(err.message);
});