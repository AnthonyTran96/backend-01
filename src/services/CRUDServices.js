const User = require ('../models/userModel');

const getAllUsers = async ()=>{
    const userList = await User.find({});
    console.log(userList);
    return userList;
}

module.exports = {
    getAllUsers,
}