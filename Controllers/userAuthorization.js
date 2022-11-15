const express = require("express");
const userMetaModel = require("../Models/UserMetaModel");

// const userModel = require("../Models/RegisterModel");
// const userMetaModel = require("../Models/RegisterMeta");
const _ = require("lodash");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const baseRepo = require("../Repository/baseRepository");
const utils = require('../utils/commonFunctions');
const ObjectId = mongoose.Types.ObjectId;

 
module.exports = {
userLogin
}




async function userLogin(req,res,next){
    const body = req.body;
    if(!body.userName||!body.password){
      return res.status(400).json({message:"Please Enter Details for Login ",status:400});
    }
    
    try{
    
    let userdata = await userMetaModel.findOne({userName:body.userName});
    // console.log("User =",usermeta);
    if(!userdata){
      return res.status(400).json({message:"Incorrect Details",status:400});
    }
   console.log("Body Pass = ",body.password);
   console.log("User Pass = ",userdata.userPassword);

    const isPassMatch = await bcrypt.compareSync(body.password,userdata.userPassword);
    console.log("match",isPassMatch);  
    if(!isPassMatch){
      return res.status(400).json({message:"Incorrect Password",status:400});
    }
    
    // let user = await baseRepo.baseDetail(userModel,{
    //   searchParams:{
    //     userRoleId:ObjectId(userdata._id)
    //   },
    // });
    // console.log("user=",user);
    // if(!user){
    //   return next({message:"Account Not Found",status:400})
    // }
    
    const token = utils.generateJWT({
      userId:userdata._id,
       Role:userdata.Role
    });
    console.log(token);
    return res.status(200).json({token});
    
    
    
    
    
    }catch(err){
      console.log("error=>",err);
      return res.status(400).json({
        message:err
      })
    }
    }
    