const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// connect to express app
const app = express()


// connect to mongoDb
const dbURL = 'mongodb+srv://admin:admin@cluster30.ktwjfyy.mongodb.net/usersDB?retryWrites=true&w=majority&appName=cluster30'
mongoose
.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(
    app.listen(3001,()=>{
        console.log('server is running on port 3000')}
    
))
.catch (((err)=>{
    console.log('server error')
}))


//middleware
app.use(bodyParser.json())
app.use(cors())

//schema

//routes
