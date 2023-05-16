const express = require('express');
const router = express.Router();
const {getHomePage} = require('../controllers/homeController');

//router
router.get('/', getHomePage);

module.exports=router;