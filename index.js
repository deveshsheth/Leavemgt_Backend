const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const roleRoutes = require('./routes/role.routes');
const departmentRoutes = require('./routes/department.routes');
const usersRoutes=require('./routes/users.routes')
app.use('/role',roleRoutes);
app.use('/department',departmentRoutes);
app.use('/user', usersRoutes)


app.get('/', (req, res) => {
    res.json({ info: 'Node.js,Express, and Postgres API'})
})

app.listen(port,()=>{
    console.log('App running on port 3000')
})