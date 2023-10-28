const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const review = require('../models/Review')

router.get('/' , (req,res)=>{
    res.json({success : true})
})



router.post('/addReview' , async(req,res)=>{
    try {
        const body = req.body ; 
        console.log(body)
        const data = await  jwt.verify(body.token , 'secret123'); 
        const user = await User.findOne({email : data.user.email}); 
        console.log(user)
        const rev = review.create({
            pid : body.Id ,
            User : user,
            review : body.review
        })
        res.json({success : true })
    } catch (error) {
        res.json({success : false , error : error })
        
    }
   
})


module.exports = router; 
