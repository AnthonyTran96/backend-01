const {getAllUsers} = require ('../services/CRUDServices');
const User = require ('../models/userModel');

const getHomePage = async (req, res)=>{
    // const userList = await getAllUsers();
    const result =await User.find();
    return res.render('home.ejs', {listUser : result})
}

module.exports = {
    getHomePage,
}