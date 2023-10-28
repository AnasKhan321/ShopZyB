const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Profile = require('../models/Profile');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/takeorder', async (req, res) => {
    try {
        const { details, bill, items } = req.body;
        const pro = await Profile.findOne({ email: details.email })
        console.log(pro)
        if (pro) {
            console.log('profile is here ')
        }
        else {
            let newPro = await Profile.create({ email: details.email, name: details.name, address: details.address, phone: details.phone, city: details.city, state: details.state, landmark: details.landmark, pincode: details.pincode })

        }
        const newOrder = new Order({ email: details.email, name: details.name, address: details.address, phone: details.phone, city: details.city, state: details.state, landmark: details.landmark, pincode: details.pincode, bill: req.body.bill, items: req.body.items })
        newOrder.save();
        console.log(newOrder)
        res.json({ success: true })
    } catch (errorr) {
        res.json({success : false , error : errorr})
    }

})



router.get('/myorder/:token' , async(req,res)=>{
    try {
        const token = req.params.token ; 
        const data = jwt.verify(token , 'secret123'); 

        console.log(data)
        const allOrders = await Order.find({email : data.user.email})


        res.json({success : true , data : allOrders})
    } catch (errorr) {
        res.json({success : false , error  :errorr})
    }
})

router.get('/orderbyid/:id' , async(req,res)=>{
    try {
        const idd = req.params.id ; 
        const data = await Order.findOne({_id : idd})
        console.log(data)
        res.json({success : true , data : data})
    } catch (error) {
        res.json({error : error , success : false})
    }
} )



router.get('/Myprofile/:token' , async(req,res)=>{
    try {
        const token = req.params.token ; 
        const data = jwt.verify(token , 'secret123'); 
        console.log(token)

   
        const ProfileData = await Profile.findOne({email : data.user.email})


        res.json({success : true , data : ProfileData})
    } catch (errorr) {
        res.json({success : false , error  :errorr})
    }
})


router.post('/UpdateProfile' , async(req,res)=>{
    try {
        const data = req.body ; 
        const upate = await  Profile.findOneAndUpdate(data)
        console.log(upate)
        res.json({success : true })
    } catch (error) {
        console.log(error )
        res.json({success : false })
    }
})

module.exports = router;

