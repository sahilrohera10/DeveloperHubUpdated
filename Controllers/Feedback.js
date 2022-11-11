const express = require("express");
const userFeed = require("../Models/FeedbackModel");
const mongoose = require("mongoose");
const _ = require("lodash");


module.exports = {
  Feedback,
};


const userFeedback = [
 "name",
 "phone",
 "message",
 "userId",
 "trainerId",
 "cpId",
 "acceleratorId",
 "incubatorId"

];

async function Feedback(req, res) {
  let body = req.body;

  let userfeedbackbody = _.pick(body, userFeedback);

  try {
    const userFeedbackData=await userFeed.create(userfeedbackbody);
    console.log("message sent",userFeedbackData);
     return  res.status(200).json({
        message:"successfully send"
    }) 
  } catch (error) {
    return res.status(error);
  }


  
}
