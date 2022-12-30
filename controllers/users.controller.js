const { success, error, validation } = require("../utils/responses");
const pg = require('../pgdb')
var bcrypt = require('bcrypt');

//? User Signup
exports.userSignup = async (req, res) => {

    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const { fullname, phoneno, birthdate, gender, email, address, cityid, pincode, roleid, status, departmentid } = req.body;

        pg.query('insert into users(fullname,phoneno,birthdate,gender,email,password,address,cityid,pincode,roleid,status,departmentid) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [fullname, phoneno, birthdate, gender, email, password, address, cityid, pincode, roleid, status, departmentid], (error, result) => {

            if (error) {
                throw error;
            } else {
                res.status(200).json(success("user Signup sucesffuly", { fullname, phoneno, birthdate, gender, email, password, address, cityid, pincode, roleid, status, departmentid }, res.statusCode));
            }
        })
    } catch (error) {
        return error;
    }
}

//? List Users
exports.usersList = async (req, res) => {

    try {

        pg.query('select * from users', (error, result) => {

            if (error) {
                throw error;
            } else {
                res.status(200).json(success("List of users", { data: result.rows }, res.statusCode));
            }
        })
    } catch (error) {
        return error;
    }
}

//? Get User by id
exports.GetUserById = async (req, res) => {

    try {
        const userid = parseInt(req.params.userid)

        pg.query('select * from users where userid = $1', [userid], (error, result) => {

            if (result.rows.length != 0) {
                res.status(200).json(success("Users ById", result.rows, res.statusCode))
            } else {
                res.status(400).json(mistake("No Data Found", res.statusCode))
            }
        })
    } catch (error) {
        return error;
    }
}

//? User Update
exports.userUpdate = async (req, res) => {

    try {
        const userid = parseInt(req.body.userid);
        const password = await bcrypt.hash(req.body.password, 10);
        const { fullname, phoneno, birthdate, gender, email, address, cityid, pincode, roleid, status, departmentid } = req.body;

        pg.query('update users set fullname=$1,phoneno=$2,birthdate=$3,gender=$4,email=$5,password=$6,address=$7,cityid=$8,pincode=$9,roleid=$10,status=$11,departmentid=$12 where userid=$13', [fullname, phoneno, birthdate, gender, email, password, address, cityid, pincode, roleid, status, departmentid, userid], (error, result) => {

            if (error) {
                throw error;
            } else {
                res.status(200).json(success("user Updated sucesffuly", { fullname, phoneno, birthdate, gender, email, password, address, cityid, pincode, roleid, status, departmentid, userid }, res.statusCode));
            }
        })
    } catch (error) {
        return error;
    }
}

//? Delete User by id
exports.deleteUser = async (req, res) => {

    try {
        const userid = parseInt(req.params.userid)

        pg.query('delete from users where userid = $1', [userid], (error, result) => {

            if (error) {
                throw error;
            } else {
                res.status(200).json(success("user Deleted sucesffuly", { userid }, res.statusCode));
            }
        })
    } catch (error) {
        return error;
    }
}

//? userLogin 
exports.userLogin = async (req, res) => {
    const users = await pg.query("select * from users where email=$1", [req.body.email])

    if (users.rows.length <= 0) {
        return res.status(404).json(error(users.rows[0].fullname + " Login Successfully", users.rows, res.statusCode))
    } else {

        if (await bcrypt.compare(req.body.password, users.rows[0].password)) {

            return res.status(200).json(success(users.rows[0].fullname + " !", users.rows, res.statusCode))
        } else {
            return res.status(201).json(error(" Wrong Credential", users.rows, res.statusCode))
        }
    }

}