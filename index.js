const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())

const roleRoutes = require('./routes/role.routes')
const departmentRoutes = require('./routes/department.routes')
const usersRoutes=require('./routes/users.routes')
const studentRoutes=require('./routes/student.routes')
app.use('/role',roleRoutes)
app.use('/department',departmentRoutes)
app.use('/user', usersRoutes)
app.use('/student', studentRoutes)


app.get('/', (req, res) => {
    res.json({ info: 'Node.js,Express, and Postgres API'})
})

app.listen(port,()=>{
    console.log('App running on port 3000')
})