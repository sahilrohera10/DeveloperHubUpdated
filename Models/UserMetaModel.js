const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');
const registrationSchema=mongoose.Schema({
    Name:{
        type:String
    },
    Phone:{
        type:Number
    },
  
    emailId:{
        tyoe:String
    },
    userName:{
        type:String
    },
    userPassword:{
        type:String
    }
    // activate:{
    //     type:Boolean,
    // }
},{timestamps:true});

module.exports = mongoose.model("RegisterModel", registrationSchema);
