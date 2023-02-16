const Role = require('../model/role.model')
const { validationResult } = require('express-validator/check');

const addRole = (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()){
            res.json({ msg: error.array()[0].msg })
        }else{
            Role.create({
                rolename: req.body.rolename
            }).then(role => {
                res.json({ msg: "Role Created..." })
            }).catch(err => res.json({ msg: err }))
        }
        
    } catch (err) {
        throw err;
    }
}

const getRole = (req,res) => {
    try{
        Role.findAll().then(roles => {
            res.send(roles)
        }).catch(err => {
            throw err;
        })
    } catch(err) {
        throw err;
    }
}

const getRoleById = (req,res) => {
    try{
        const id = parseInt(req.params.id);
        console.log("id:",id);
        Role.findOne({where:{roleid:id}}).then(result => {
            res.send(result)
        }).catch(err => {
            throw err;
        })
    }catch(err) {
        throw err;
    }
}

const updateRole = (req, res) => {
    try{
        Role.update({
            rolename:req.body.rolename
        },{
            where:{roleid:req.body.roleid}
        }).then(result => { 
            res.send(result)
        }).catch(err => {
            throw err;
        })
    }catch(err) {
        throw err;
    }
}


const deleteRole = (req,res) => {
    try {
        const id = parseInt(req.params.id);
        Role.destroy({ where: { roleid: id } }).then(result => {
          res.send("deleted Successfully !!! ")
        })
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addRole,
    getRole,
    getRoleById,
    updateRole,
    deleteRole
}