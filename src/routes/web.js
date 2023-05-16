const express = require('express');
const router = express.Router();
const {getHomePage, getCreatePage, postCreateUser, getUpdatePage, postUpdateUser, getDeletePage, postDeleteUser} = require('../controllers/homeController');

//router
router.get('/', getHomePage);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdatePage);

router.post('/update-user', postUpdateUser);

router.get('/delete/:id', getDeletePage);

router.post('/delete-user', postDeleteUser);

module.exports=router;