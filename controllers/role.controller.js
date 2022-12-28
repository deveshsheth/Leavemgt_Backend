
const responses = require('../utils/responses')
const pg = require('../pgdb')

exports.createRole = (req, res) => {
    const { rolename } = req.body

    pg.query('INSERT INTO role (rolename) VALUES ($1)', [rolename], (error) => {
        if (error) {
            throw error
        }else{
            res.status(200).json(success("Role Added", { data: result.rows }, res.status))
        }
       
    })
}

exports.getRole = (req, res) => {

    try {
        pg.query("SELECT * FROM role", (error, result) => {
            if (error) {
                throw error
            } else {
                res.status(200).json(success("List of role", { data: result.rows }, res.status))
            }
        })

    } catch (err) {
        return err;
    }

}

exports.getRoleByID = async (req, res) => {
    try {
        const roleid = parseInt(req.params.roleid);
        pg.query('SELECT * FROM role WHERE roleid = $1', [roleid], (err, result) => {
            if (err) {
                throw err
            } else {
                res.status(200).json(success("List of role by id", { data: result.rows }, res.status))
            }
        })
    } catch (err) {
        return err;
    }
}

//?update role
exports.updateRole = async (req, res) => {
    try {
        const roleid = parseInt(req.params.roleid);
        const { rolename } = req.body

        pg.query('update role set rolename=$1 where roleid=$2', [rolename, roleid], (error, results) => {
            console.log(results.affectedRows);
            if (error) {
                throw error
            } else {

                res.status(200).json(success("role updated", { rolename, roleid }, res.statusCode));
            }
        });

    } catch (error) {

        return error;

    }
};

//?delete role
exports.deleteRole = async (req, res) => {
    try {
        const roleid = parseInt(req.params.roleid);
        pg.query('delete from role where roleid=$1', [roleid], (error, result) => {
            if (error) {
                throw error
            } else {
                res.status(200).json(success("role deleted", { roleid }, res.statusCode));
            }
        });
    } catch (error) {

    }
}
