const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');
const userMetaSchema=mongoose.Schema({
    email:{
        type:String
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

module.exports = mongoose.model("UserMetaModel", userMetaSchema);
