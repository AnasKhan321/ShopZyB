const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name : {
    type:String,
    required : true
  },

  address : {
    type:String,
    required : true
  },

  state : {
    type : String,
    required : true
  },

  phone : {
    type: String , 
    required : true,
  },
  city : {
    type: String,
    required : true
  },
  landmark : {
    type : String , 
    required : true
  },
  pincode: {
    type: String,
    required : true
  },

  bill : {
    type: Number  ,
    required : true
  },
  items : {
    type : Object , 
    required : true
  },
  status : {
    type : String , 
    default : 'Placed Successfully'

  },
  Orderat: {
    type: Date,
    default: Date.now,
  },
 

 
});
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order; 