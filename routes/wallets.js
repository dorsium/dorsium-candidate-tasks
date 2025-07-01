const express = require('express');
const router = express.Router();
const { storeWallet } = require('../controllers/walletsController');
const { validateWallet } = require('../middleware/validation');

router.post('/', validateWallet, storeWallet);

module.exports = router;