const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
const sequelize = require('./utils/pgdb')


const roleRoutes = require('./routes/role.routes')
const departmentRoutes = require('./routes/department.routes')
// const usersRoutes=require('./routes/users.routes')
const studentRoutes=require('./routes/student.routes')
app.use('/role',roleRoutes)
app.use('/department',departmentRoutes)
// app.use('/user', usersRoutes)
app.use('/student', studentRoutes)

// const Department = require('./model/department.model')


sequelize.sync()
    .then(res => {
        // console.log(res);
        app.listen(port,()=>{
          console.log('App running on port 3000')
      })
    })
    .catch(err => {
        console.log(err);
    })

app.get('/', (req, res) => {
    res.json({ info: 'Node.js,Express, and Postgres API'})
})

