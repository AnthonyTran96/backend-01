const User = require ('../models/userModel');

const getAllUsers = async ()=>{
    const userList = await User.find({});
    return userList;
}

const getAnUser = async (id)=>{
    const user = await User.findOne({_id:id}).exec();;
    return user;
}

const createUser = async (userData)=>{
    const result = await User.create(userData);
    return result;
}

const createMultiUsers = async (usersArray)=>{
    const result = await User.create(usersArray);
    return result;
}

const getUserById = async (id)=>{
    try {
        const result = await User.find({_id:id});
        return result[0];
    } catch (error) {
        console.log(error);
        return {}
    }
}

const updateUser = async (updateData)=>{
    const result = await User.updateOne(updateData);
    return result;
}

const deleteUser = async (id)=>{
    const result = await User.delete({_id: id});
    return result;
}


module.exports = {
    getAllUsers,
    getAnUser,
    createUser,
    createMultiUsers,
    getUserById,
    updateUser,
    deleteUser,
}