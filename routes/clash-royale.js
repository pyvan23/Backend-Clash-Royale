const { Router } = require('express');
const { clashCards } = require('../controllers/clash');
const router = Router();



router.get('/', clashCards)


module.exports = router