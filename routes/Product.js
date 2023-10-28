const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 
const multer = require('multer');
const review = require('../models/Review')

// Define storage options for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // This is the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique file name
  },
});

const upload = multer({ storage });


router.get('/' , (req,res)=>{
    res.send('hello world of light ')
})

// Define a route to handle file uploads
router.post('/addproduct', upload.single('image'), async(req, res) => {
    console.log(req.body)
    console.log(req.body.other.split(','))

  const prod = await  Product.create({
    Name : req.body.name ,
    Category : req.body.category,
    imageurl : req.file.filename,
    other : req.body.other.split(','),
    availabelQty : req.body.qty ,
    price : req.body.price,
    desc : req.body.desc
  })

  res.json({ message: 'Image uploaded successfully' });
});


router.get('/allproduct' , async(req,res)=>{
  const data  = await  Product.find(); 
  res.json({data : data})
})

router.get('/product/:id' ,async(req,res)=>{
  const data = await Product.findOne({_id : req.params.id })
  const reviews = await review.find({pid : req.params.id })
  res.json({data : data , review : reviews})
})

router.get('/categoryproduct/:category' , async(req,res)=>{
  const data = await Product.find({Category : req.params.category })
  res.json({data : data})
})

router.get('/search/:query', async (req, res) => {
  const queryString = req.params.query;
  try {
    const products = await Product.find({
      $or: [
        { Name: { $regex: queryString, $options: 'i' } }, // Case-insensitive search in Name
        { Category: { $regex: queryString, $options: 'i' } }, // Case-insensitive search in Category
      ],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



router.get('/byname' , async(req,res)=>{
  res.json({success : true})
})

module.exports = router; 
