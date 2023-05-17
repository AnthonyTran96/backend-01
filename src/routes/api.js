const express = require('express');
const router = express.Router();
const {getAllCustomersApi, getCustomerByIdApi,  postCreateACustomerApi, postCreateMultiCustomersApi} = require ('../controllers/customersController');

router.get('/customers', getAllCustomersApi);

router.get('/customer', getCustomerByIdApi);

router.post('/customer', postCreateACustomerApi);

router.post('/customers', postCreateMultiCustomersApi);

module.exports = router;