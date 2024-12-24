const express = require('express')
const mongoose=require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users',require('./routes/user.route'))



app.listen(3001,() =>{
    console.log("Running on port 3001")
})