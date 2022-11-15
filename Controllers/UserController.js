const express = require("express");
const CPModel = require("../Models/CPModel");
const ITSoftwareModel = require("../Models/ITSoftwareModel");
const UniversityModel = require("../Models/UniversityModel");

module.exports = {

}

async function GetDetails(req,res){
   const id = req.params.id;
   const Role = req.params.Role;
    try{
       
         
    }catch(err){
        console.log(err);
        return res.status(400).json({
            message:err
          })
    }

}