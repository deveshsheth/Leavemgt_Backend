const User = require('../model/user.model');
const bcrypt = require('bcrypt');

const addUser = async (req,res) => {
    try{
        const {fullname, phoneno, email, password, address, pincode}  = req.body
        const user = await User.findOne({where:{email:email}})
        if(user){
            res.json("Email Already Registered");
        }else{
            User.create({
                fullname:fullname,
                phoneno:phoneno,
                email:email,
                password:await bcrypt.hash(password, 10),
                address:address,
                pincode:pincode
            }).then((result) => {
               res.send(result) 
            }).catch((err) => {
                throw err;
            });
        }
       
    }catch(err) {
        throw err;
    }
}

const getUser = (req,res) => {
    try{
        User.findAll({where:{isdeleted:0}}).then((result) => {
            res.send(result)
        }).catch((err) => {
            throw err;
        });
    }catch(err) {
        throw err;
    }
}

const getUserById = (req,res) => {
    try{
        
        const id = parseInt(req.params.id);
        User.findOne({where:{userid:id,isdeleted:0}}).then((result) => {
            res.send(result)
        }).catch((err) => {
            throw err;
        });
    }catch(err){
        throw err;
    }
}

const updateUser = async (req, res) => {

    try {
        const {userid,fullname, phoneno, email, password, address, pincode}  = req.body
        await User.update({
            fullname:fullname,
            phoneno:phoneno,
            email:email,
            password:await bcrypt.hash(password, 10),
            address:address,
            pincode:pincode
        },
            {
                where: {
                    userid: userid
                }

            }).then(user => {
                    res.send(user)
            }).catch(err => {
                throw err;
            })

    } catch (err) {
        throw err;
    }
}

const deleteUser = (req, res) => {
    try {
        User.update({
            isdeleted:1
        },
            {
                where: {userid: req.body.userid}}).then(user => {
                    res.send(user)

            }).catch(err => {
                throw err;
            })
    } catch (err) {
        throw err;
    }
}


module.exports = {
    addUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}