const {getAllUsers, createUser,updateUser, getUserById, deleteUser} = require ('../services/CRUDServices');

const getHomePage = async (req, res)=>{
    const result =await getAllUsers();
    return res.render('home.ejs', {listUser : result})
}

const getCreatePage = async (req, res)=>{
    return res.render('create.ejs')
}

const postCreateUser = async (req, res)=>{
    const userData = req.body;
    await createUser(userData);
    return res.redirect('/');
}

const getUpdatePage = async (req,res)=>{
    const id = req.params.id;
    const userData = await getUserById(id);
    return res.render('edit.ejs', {user: userData});
}

const postUpdateUser = async (req, res)=>{
    const updateData = req.body;
    await updateUser(updateData);
    return res.redirect('/');
}

const getDeletePage = async (req,res)=>{
    const id = req.params.id;
    const userData = await getUserById(id);
    return res.render('delete.ejs', {user: userData});
}

const postDeleteUser = async (req, res)=>{
    const id = req.body.id;
    await deleteUser(id);
    return res.redirect('/');
}

module.exports = {
    getHomePage,
    getCreatePage,
    postCreateUser,
    getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser
}