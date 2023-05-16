const mongoose = require ('mongoose');
require('dotenv').config();

const connection = async ()=>{
    const options ={
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        dbName: process.env.DB_NAME,
    };
    console.log('>>>check env: ', options, process.env.DB_HOST)
    await mongoose.connect(process.env.DB_HOST, options);
}

module.exports = connection;