const express = require('express');
const matchController = require('../controllers/matchController');
const router = express.Router();

router.post('/match/start', matchController.startMatch);


module.exports = router;
