const mongoose = require('mongoose');
require('dotenv').config();

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: String,
        city: String,
    },
    { timestamps: true }
);

const User = mongoose.model('User', usersSchema);

module.exports = User;
