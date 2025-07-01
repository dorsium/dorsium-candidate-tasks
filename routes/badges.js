const express = require('express');
const router = express.Router();
const { getUserBadges } = require('../controllers/badgesController');

router.get('/:userId', getUserBadges);

module.exports = router;