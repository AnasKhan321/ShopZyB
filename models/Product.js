const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Category : {
    type:String,
    required : true
  },

  imageurl : {
    type : String,
    required : true
  },
  other : [],
  availabelQty : {
    type: Number , 
    required : true,
  },
  price : {
    type: Number,
    required : true
  },
  desc : {
    type : String , 
    required : true
  },
  Size: {
    type: [String], 
    default : []
  },
  Color: {
    type: [String], // An array of numbers
    default : []
  }

 
});
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 