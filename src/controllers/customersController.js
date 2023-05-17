const {getAllUsers, getAnUser, createUser, createMultiUsers} = require ('../services/CRUDServices');

module.exports = {
    getAllCustomersApi: async (req, res) =>{
        try {
            const data = await getAllUsers ();
            return res.status(200).json({
                errorCode: 0,
                data: data,
            })
        } catch (error) {
            return res.status(500).json({
                errorCode: -1,
                data: null,
                error: error,
            })
        }
    },

    getCustomerByIdApi: async (req, res) =>{
        try {
            const id = req.body.id;
            const data = await getAnUser (id);
            return res.status(200).json({
                errorCode: 0,
                data: data,
            })
        } catch (error) {
            return res.status(500).json({
                errorCode: -1,
                data: null,
                error: error,
            })
        }
    },
    
    postCreateACustomerApi: async (req, res) =>{
        try {
            const customerData = req.body;
            const result = await createUser (customerData);
            return res.status(201).json({
                errorCode: 0,
                data: result,
            })
        } catch (error) {
            return res.status(500).json({
                errorCode: -1,
                data: null,
                error: error,
            })
        }
    },

    postCreateMultiCustomersApi: async (req, res) =>{
        console.log('>>>req.body.customers: ', req.body.customers);
        try {
            const customers = req.body.customers;
            const result = await createMultiUsers (customers);
            return res.status(201).json({
                errorCode: 0,
                data: result,
            })
        } catch (error) {
            return res.status(500).json({
                errorCode: -1,
                data: null,
                error: error,
            })
        }
    }
}