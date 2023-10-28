const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
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
 
 
});
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile; 