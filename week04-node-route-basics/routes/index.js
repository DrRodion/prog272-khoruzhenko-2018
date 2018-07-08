var express = require('express');
var router = express.Router();
var fs = require('fs');

var express = require('express');
var router = express.Router();

var calculateFeet = require('../source/calculateFeet');
var calculateCircum = require('../source/calculateCircum');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
	res.render('index', { title: 'NodeRouteBasics' });
});

/* Calculate feet in X miles. */
router.get('/calculateFeet', function(request, response) {
	'use strict';  
	response.send({"result": calculateFeet.calculateFeet(request.query.miles) });
});

/* Calculate circumference in X radius circle. */
router.get('/calculateCircum', function(request, response) {
	'use strict';  
	response.send({"result": calculateCircum.calculateCircum(request.query.radius) });
});

module.exports = router;
