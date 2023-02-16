const { success, mistake, validation } = require("../utils/responses");
const pg = require('../utils/pgdb')

exports.addDepartment = (req, res) => {

    const { departmentname } = req.body
    pg.query('insert into department (departmentname) values($1)', [departmentname], (error, result) => {

        if (error) {
            throw error
        } else {
            res.status(200).json(success("Department Added", { departmentname }, res.status))
        }
    })

}

exports.getDepartment = (req, res) => {

    try {
        pg.query('select * from department', (error, result) => {
            if (error) {
                throw error
            } else {
                res.status(200).json(success("List of department", { data: result.rows }, res.status))
            }
        })

    } catch (error) {
        throw error
    }
}

exports.getDepartmentByID = async (req, res) => {

    try {
        const departmentid = parseInt(req.params.departmentid)

        pg.query('select * from department where departmentid = $1', [departmentid], (error, result) => {

            if (result.rows.length != 0) {
                res.status(200).json(success("Department ById", result.rows, res.statusCode))
            } else {
                res.status(400).json(mistake("No Data Found", res.statusCode))
            }
        })
    } catch (error) {
        throw error
    }
}

exports.updateDepartment=async(req,res)=>{
    try{
        const departmentid= parseInt(req.body.departmentid);
        
        const{departmentname}=req.body
        pg.query('update department set departmentname=$1 where departmentid=$2',[departmentname,departmentid],(error,result)=>{
            if(error){
                throw error;
            }else{
                res.status(200).json(success("Department Updated Successfully",{departmentname,departmentid},res.statusCode));
            }
        })
    }catch(error){

        return error;

    }
}

exports.deleteDepartment = (req, res) => {

    const departmentid = parseInt(req.params.departmentid)

    try {
        pg.query('delete from department where departmentid = $1', [departmentid], (error, result) => {
            if (error) {
                throw error
            } else {
                res.status(200).json(success("Department Deleted", { data: result.rows }, res.status))
            }
        })

    } catch (error) {
        throw error
    }

}
