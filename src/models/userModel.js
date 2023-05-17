const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
require('dotenv').config();

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: String,
        city: String,
    },
    { timestamps: true }
);

usersSchema.plugin(mongoose_delete, { overrideMethods: ['find'] });

const User = mongoose.model('User', usersSchema);

module.exports = User;
