var express = require('express');
var router = express.Router();

var addressList = require('./get-address-list');

/* Get home page. */
router.get('/', function(req, res, next) { 'use strict';
	res.render('index', { title: 'Maven Address' });
});

/* Get address list. */
router.get('/get-address-list', function(request, response) {
	'use strict';  
	response.send({"result": addressList });
});

module.exports = router;
