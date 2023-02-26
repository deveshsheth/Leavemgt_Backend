const Department = require('../model/department.model')
const { validationResult } = require('express-validator/check');

const addDepartment = (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()){
            res.json({ msg: error.array()[0].msg })
        }else{
            Department.create({
                departmentname: req.body.departmentname
            }).then(dept => {
                res.json({ msg: "Department Created..." })
            }).catch(err => res.json({ msg: err }))
        }
        
    } catch (err) {
        throw err;
    }
}

const getDepartment = (req,res) => {
    try{
        Department.findAll().then(depts => {
            res.send(depts)
        }).catch(err => {
            throw err;
        })
    } catch(err) {
        throw err;
    }
}

const getDepartmentById = (req,res) => {
    try{
        const id = parseInt(req.params.id);
        // console.log("id:",id);
        Department.findOne({where:{departmentid:id}}).then(result => {
            res.send(result)
        }).catch(err => {
            throw err;
        })
    }catch(err) {
        throw err;
    }
}

const updateDepartment = (req, res) => {
    try{
        Department.update({
            departmentname:req.body.departmentname
        },{
            where:{departmentid:req.body.departmentid}
        }).then(result => { 
            res.send(result)
        }).catch(err => {
            throw err;
        })
    }catch(err) {
        throw err;
    }
}


const deleteDepartment = (req,res) => {
    try {
        const id = parseInt(req.params.id);
        Department.destroy({ where: { departmentid: id } }).then(result => {
          res.send("deleted Successfully !!! ")
        })
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addDepartment,
    getDepartment,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
}