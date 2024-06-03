const mongoose = require("mongoose");
 

const formSchema = new mongoose.Schema({
    WhatAreYouInterestedIn:String,
    name:String,
    email:String,
    phone:String,
    WhenDoYouNeedToMove:String,
    HowManyPeople:String,
    HowLongFor:String,
    CompanyName:String,
    CompanySize:String
});

module.exports = mongoose.model("forms",formSchema);