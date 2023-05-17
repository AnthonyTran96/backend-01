const {getAllUsers, getAnUser, getMultiUsers, createUser, createMultiUsers, updateUser, deleteUser, deleteMultiUsers} = require ('../services/CRUDServices');

module.exports = {
    getAllCustomersApi: async (req, res) =>{
        try {
            const query = req.query;
            const data = await getAllUsers (query);
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
            console.log(customerData);
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
    },

    putUpdateCustomerApi: async (req, res) =>{
        try {
            const updateData = req.body;
            await updateUser (updateData);
            const data = await getAnUser (updateData.id);
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

    deleteCustomerByIdApi: async (req,res)=>{
        try {
            const id = req.body.id;
            const data =  await getAnUser(id);
            await deleteUser (id);
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
    } , 
    
    deleteMultiCustomersApi: async (req,res)=>{
        try {
            const arrayIds = req.body.customersId;
            const data =await getMultiUsers(arrayIds);
            await deleteMultiUsers (arrayIds);
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
    }
}