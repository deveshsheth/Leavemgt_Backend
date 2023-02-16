const { success, mistake, validation } = require("../utils/responses");
const responses = require('../utils/responses')
const pg = require('../utils/pgdb')

var bcrypt = require('bcrypt');

//? User Signup
exports.studentSignup = async (req, res) => {

    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const { fullname, phoneno, birthdate, gender, email, address, cityid, pincode, roleid, status, departmentid,sem,enrollmentno } = req.body;

        pg.query('insert into student(fullname,phoneno,birthdate,gender,email,password,address,cityid,pincode,roleid,status,departmentid,sem,enrollmentno) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)', [fullname, phoneno, birthdate, gender, email, password, address, cityid, pincode, roleid, status, departmentid,sem,enrollmentno], (error, result) => {

            if (error) {
                throw error;
            } else {
                res.status(200).json(success("Student Signup sucesffuly", { fullname, phoneno, birthdate, gender, email, password, address, cityid, pincode, roleid, status, departmentid,sem,enrollmentno }, res.statusCode));
            }
        })
    } catch (error) {
        return error;
    }
}