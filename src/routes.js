const router = require('express').Router();

const apiController = require('./api-controller');

router.get('/', apiController.index);

module.exports = router;