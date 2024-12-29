const express = require('express');
const pageController = require('../controllers/pageController');
const router = express.Router();

router.get('/', pageController.getHomePage);
router.get('/match/history', pageController.getMatchHistory);
router.get('/match/:id', pageController.getMatchPage);



module.exports = router;
