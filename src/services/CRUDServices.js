const path = require('path');
const User = require ('../models/userModel');
const aqp = require ('api-query-params');

const getAllUsers = async (query)=>{
    if (!query) query={};
    const { filter } = aqp(query);
    const limit = query.limit;
    const page = query.page;
    delete filter.page;
    if (filter.name) filter.name = { $regex: filter.name };
    if (limit&&page) {
        const skip = (page-1)*limit;
        try {
            const userList = await User.find(filter).skip(skip).limit(limit).exec();
            return userList;
        } catch (error) {
            return error;
        }
    } else {
        try {
            const userList = await User.find(filter);
            return userList;
        } catch (error) {
            return error;
        }
    }
}

const getAnUser = async (id)=>{
    const user = await User.findOne({_id:id}).exec();;
    return user;
}

const getMultiUsers = async (arrayIds)=>{
    const userArr = await User.find({_id: {$in: arrayIds}});
    return userArr;
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
    const {id, name, email, city} = updateData;
    const result = await User.updateOne({_id:id}, {name, email, city});
    return result;
}

const deleteUser = async (id)=>{
    const result = await User.delete({_id: id});
    return result;
}

const deleteMultiUsers = async (arrayIds)=>{
    const result = await User.delete({_id: {$in: arrayIds}});
    return result;
}

const uploadSingleFile = (file)=> {
    const extName = path.extname(file.name);
    const baseName = path.basename(file.name, extName);
    const date = Date.now();
    const finalName = baseName + '-' + date + extName
    const finalPath = path.resolve(__dirname, '../public/images/upload/');
    uploadPath = path.join(finalPath,finalName);
  // Use the mv() method to place the file somewhere on your server
    file.mv(uploadPath);
    return finalName;
}

const uploadMultiFiles = (arr)=> {
    const finalPaths = arr.map(file=>fileName = uploadSingleFile(file));
    return finalPaths;
}


module.exports = {
    getAllUsers,
    getAnUser,
    getMultiUsers,
    createUser,
    createMultiUsers,
    getUserById,
    updateUser,
    deleteUser,
    deleteMultiUsers,
    uploadSingleFile,
    uploadMultiFiles,
}