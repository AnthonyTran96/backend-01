const express = require('express');
const router = express.Router();
const {getAllCustomersApi, getCustomerByIdApi,  postCreateACustomerApi, postCreateMultiCustomersApi, putUpdateCustomerApi, deleteCustomerByIdApi, deleteMultiCustomersApi} = require ('../controllers/customersController');

router.get('/customers', getAllCustomersApi);

router.get('/customer', getCustomerByIdApi);

router.post('/customer', postCreateACustomerApi);

router.post('/customers', postCreateMultiCustomersApi);

router.put('/customer', putUpdateCustomerApi);

router.delete('/customer', deleteCustomerByIdApi);

router.delete('/customers', deleteMultiCustomersApi);

module.exports = router;