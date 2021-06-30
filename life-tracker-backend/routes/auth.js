const express = require("express");
const User = require("../models/user")
const router = express.Router();

router.post("/login", async (req,res,next) => {

    try{
        
        const user = await User.login(req.body)
        return res.status(200).json({ user })
        //take the users email and password and attempting to authenticate them
    } catch(err){
        next(err);
    }
})

router.post("/register", async (req,res,next) => { 
    try{
        
        //take the users email, password and create a new user in our database
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    } catch(err){
        next(err);
    }
    
})

module.exports = router;