const { success, error, validation } = require("../utils/responses");
const pg = require('../pgdb')

exports.addDepartment = (req, res) => {

    const { departmentname } = req.body
    pg.query('insert into department (departmentname) values($1)', [departmentname], (error, result) => {

        if (error) {
            throw error
        } else {
            res.status(200).json(success("Department Added", { data: result.rows }, res.status))
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

exports.updateDepartment = (req, res) => {

    const departmentid = parseInt(req.params.departmentid);
    const { departmentname } = req.body;

    try {

        pg.query('update department set departmentname = $1 where departmentid = $2', [departmentname, departmentid], (error, result) => {
            if (error) {
                throw error
            } else {
                res.status(200).json(success("Department Updated", { data: result.rows }, res.status))
            }
        })

    } catch (error) {
        throw error
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
