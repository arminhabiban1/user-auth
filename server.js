const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('./models/userSchema')


// connect to express app
const app = express()


// connect to mongoDb
const dbURL = 'mongodb+srv://admin:admin@cluster30.ktwjfyy.mongodb.net/usersDB?retryWrites=true&w=majority&appName=cluster30'
mongoose
.connect(dbURL, {
    
    

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




//routes
//user registration
//post registration
app.post('/register',async(req, res) => {
try{
    const {email, username ,password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser= new user({email, username,password: hashedPassword})
    await newUser.save()
    res.status(201).json({
        message: 'user created'
    })
}
catch(error){
    res.status(500).json({
      error: 'error creating user'
    })
}
})
//get registered users
app.get('/register' ,async (req ,res)=>{
   try{ 
    const users = await user.find()
    res.status(201).json(users)

}catch(error){
    res.status(500).json({
        error: 'user not found'
    })
}
})
//get login
app.post('/login',async ( req,res)=>{
    try{
        const{username,password}= req.body
        const user = await user.findOne({username})
        if(!user){
            return res.status(401).json({
                error:'user not found'
            })
            
        }
        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.status(401).json({
                error:'invalid password'
            })
        }
        
    }

})

