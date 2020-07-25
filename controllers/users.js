const users = require('../data/index');
const usersCount = users.length;

const listAll = (req, res) =>{
  return res.json(users);
};

const showOne = (req, res) =>{
    const id = req.params.usersId;
    const filteredId = users.find(user =>user.id === Number(id));
    if(filteredId){
        return res.json(filteredId);
    }
    else{
        return res.status(400).json({ msg: `User id number does not exist` })
    }
  
};

const createNewUser = (req, res) =>{
    const newUser = {
        id: usersCount + 1,
        ...req.body
    };
    if(!newUser.name || !newUser.username || !newUser.email || !newUser.address || !newUser.phone || !newUser.website || !newUser.company){
        return res.status(400).json({ msg: `Must include user's name, username, email, address, phone, website, and company.` });
      }else{
    users.push(newUser);
    res.json(newUser);
      }
};

const updateOneUser = (req, res) =>{
     const id = req.params.usersId;
     const filteredId = users.find(user =>user.id === Number(id));
     if(filteredId){
        const updateUser = req.body;
        users.forEach(user => {
            user.name = updateUser.name ? updateUser.name : user.name;
            user.occupation = updateUser.email ? updateUser.email : user.email;
            user.avatar = updateUser.avatar ? updateUser.avatar : user.avatar;
            res.json(updateUser)
        })
      }
      else{
        res.status(400).json({ msg: `User id number does not exist` })
    }
};

const deleteOneUser = (req, res) =>{
    const id = req.params.usersId;
    const filteredId = users.find(user =>user.id === Number(id));
    if(filteredId){
        filteredId.isActive = false;
        res.send({ msg: `User has been deleted` })
    }
    else{
        res.status(400).json({ msg: `User id number does not exist` }) 
    }
};

module.exports = {
    listAll, 
    showOne, 
    createNewUser, 
    updateOneUser,
    deleteOneUser
}