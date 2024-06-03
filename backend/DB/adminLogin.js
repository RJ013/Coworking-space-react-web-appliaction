const mongoose = require("mongoose");
 

const adminSchema = new mongoose.Schema({
    email:String,
    password:String,
    resetToken: String, 
  resetTokenExpiration: Date
});

module.exports = mongoose.model("admin",adminSchema);