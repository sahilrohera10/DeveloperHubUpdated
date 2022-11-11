const express = require("express");
const StudentModel = require("../Models/StudentModel");
const CPModel = require("../Models/CPModel");
const RegisterModel = require("../Models/UserMetaModel");
const UniversityModel = require("../Models/UniversityModel");
const baseRepo = require("../Repository/baseRepository");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { mongoose } = require("mongoose");
const { ObjectId } = require("mongodb");
//mailgun 
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox53616e3e6453441ebd344297b4910df4.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });
const jwt = require('jsonwebtoken');

module.exports = {
  
  ActivateAccount,
  UniversityRegistration
};


async function UniversityRegistration(req, res) {
  const body = req.body;
  const Name = body.name;
  const Phone = body.phone;
  const Role = body.Role;
 
  try {
    const user = await RegisterModel.findOne({ emailId: body.email });
    if (user) {
      return res.status(400).json("User Already Exist");
    }
    const UniversitymodelField = [
      "University",
      "CnName",
      "ReposManager",
      "TraineeQualification",
      "TotalTraineeNo",
      "startDate",
      "endDate",
      "trainTheTrainer",
      "PreRequisite",
      "Courses",
      "TrainingMode",
      "ProjectType",
      "TrainingMedia",
      "ActiveAwareness",
      "Certification",
      "PanImage",
      "AadharImage"
    ];
    const userName = Name.FN.slice(0, 3) + Phone.slice(0, 4);
    const userPassword = Role.slice(0, 3) + Name.FN;
    const salt = await bcrypt.genSalt(10);
    const Secpassword = await bcrypt.hash(userPassword, salt);

    let Phasebody;
    Phasebody.userName = userName;
    Phasebody.userPassword = Secpassword;
    Phasebody.emailId = body.email;
    const userMetaDetails = await baseRepo.baseCreate(RegisterModel, Phasebody);


    let Phase2body = _.pick(body, UniversitymodelField);
    Phase2body.userMetaId = userMetaDetails._id;
    await baseRepo.baseCreate(UniversityModel, Phase2body);


    const token = jwt.sign({ Name, email }, process.env.JWT_ACC_ACTIVATE, { expiresIn: '20m' })

    const data = {
      from: 'noreply@crossteam.com',
      to: body.email,
      subject: 'Account Activation Link',
      html: `
              <h2>Please click on the given link to activate your account</h2>
              <div><h4> Your User name is <i>${userName}</i> and password is <i>${userPassword}</i> </h4></div>
              <p>${process.env.CLIENT_URL}/authentication/activate/${token}</p>
          `
    };
    mg.messages().send(data, function (error, body) {
      if (error) {
        return res.json({
          error: error.message
        })
      }
      return res.json({
        message: 'Email has been sent, kindly activate your account'
      })
    });




  } catch (err) {
    console.log("Error=>", err);
    return res.status(400).json({ message: err });
  }
}


// async function StudentRegistration(req, res) {
//   const body = req.body;
//   const Name = body.name;
//   const Phone = body.phone;
//   const Role = body.Role;
 
//   try {
//     const user = await RegisterModel.findOne({ emailId: body.email });
//     if (user) {
//       return res.status(400).json("User Already Exist");
//     }
//     const ChannelPartnermodelField = [
//       "University",
//       "CnName",
//       "ReposManager",
//       "TraineeQualification",
//       "TotalTraineeNo",
//       "startDate",
//       "endDate",
//       "trainTheTrainer",
//       "PreRequisite",
//       "Courses",
//       "TrainingMode",
//       "ProjectType",
//       "TrainingMedia",
//       "ActiveAwareness",
//       "Certification",
//       "PanImage",
//       "AadharImage"
//     ];
//     const userName = Name.FN.slice(0, 3) + Phone.slice(0, 4);
//     const userPassword = Role.slice(0, 3) + Name.FN;
//     const salt = await bcrypt.genSalt(10);
//     const Secpassword = await bcrypt.hash(userPassword, salt);

//     let Phasebody;
//     Phasebody.userName = userName;
//     Phasebody.userPassword = Secpassword;
//     Phasebody.emailId = body.email;
//     Phasebody.name = Name;
//     Phasebody.phone = Phone;
//     const userMetaDetails = await baseRepo.baseCreate(RegisterModel, Phasebody);


//     let Phase2body = _.pick(body, UniversitymodelField);
//     Phase2body.userMetaId = userMetaDetails._id;
//     await baseRepo.baseCreate(UniversityModel, Phase2body);


//     const token = jwt.sign({ Name, email }, process.env.JWT_ACC_ACTIVATE, { expiresIn: '20m' })

//     const data = {
//       from: 'noreply@crossteam.com',
//       to: body.email,
//       subject: 'Account Activation Link',
//       html: `
//               <h2>Please click on the given link to activate your account</h2>
//               <div><h4> Your User name is <i>${userName}</i> and password is <i>${userPassword}</i> </h4></div>
//               <p>${process.env.CLIENT_URL}/authentication/activate/${token}</p>
//           `
//     };
//     mg.messages().send(data, function (error, body) {
//       if (error) {
//         return res.json({
//           error: error.message
//         })
//       }
//       return res.json({
//         message: 'Email has been sent, kindly activate your account'
//       })
//     });




//   } catch (err) {
//     console.log("Error=>", err);
//     return res.status(400).json({ message: err });
//   }
// }
// async function Registration(req, res) {
//   const body = req.body;
//   const Name = body.name;
//   const Phone = body.phone;
//   const Role = body.Role;
//   const searchParams = {
//     email: body.email,
//   };
//   const email = body.email;
//   try {
//     const user = await RegisterModel.findOne({ email });
//     let userRole;
//     if (user) {
//       console.log(user);
//       return res.status(400).json("User Already Exist");
//     } else {
//       if (body.Role == "University") {
//         const UniversitymodelField = [
//           "University",
//           "CnName",
//           "ReposManager",
//           "TraineeQualification",
//           "TotalTraineeNo",
//           "startDate",
//           "endDate",
//           "trainTheTrainer",
//           "PreRequisite",
//           "Courses",
//           "TrainingMode",
//           "ProjectType",
//           "TrainingMedia",
//           "ActiveAwareness",
//           "Certification",
//           "PanImage",
//           "AadharImage"
//         ];
//         let Phase2body = _.pick(body, UniversitymodelField);
//         await baseRepo.baseCreate(UniversityModel, Phase2body);
//         userRole = await baseRepo.baseDetail(UniversityModel, searchParams);
//       } else if (body.Role == "Channel Partner") {
//         const CPModelField = [
//           "CompanyName",
//           "CompanyPhoneNumber",
//           "CompanyEmail",
//           "City",
//           "Country",
//           "ContactPersonName",
//           "ContactPersonNumber",
//           "Designation",
//           "ReportingManager",
//           "GSTnumber",
//           "PANnumber",
//           "ChannelPartnerType",
//           "CourseExpert",
//           "Certified",
//           "Experience",
//           "ProjectType",
//           "NetworkingZone",
//           "TrainingMedia"
//         ];
//         let Phase2body = _.pick(body, CPModelField);

//         await baseRepo.baseCreate(CPModel, Phase2body);
//         userRole = await baseRepo.baseDetail(CPModel, searchParams);
//       } else if (body.Role == "IT Software" || body.Role == "Freshers") {
//         const StudentModelField = [
//           "Qualification",
//           "preRequisite",
//           "Course",
//           "TrainingMode",
//           "ProjectType",
//           "TrainingMedia",
//           "ActivateAwareness",
//           "CertificationOffer",
//         ];
//         let Phase2body = _.pick(body, StudentModelField);

//         await baseRepo.baseCreate(StudentModel, Phase2body);
//         userRole = await StudentModel.findOne({ email: body.email });
//         console.log("user ROle = ", userRole);
//       }
//       let Phase1body = _.pick(body, RegisterModelField);
//       Phase1body.userRoleId = ObjectId(userRole._id);
//       const userName = Name.FN.slice(0, 3) + Phone.slice(0, 4);
//       console.log(userName);

//       const userPassword = Role.slice(0, 3) + Name.FN;

//       console.log(userPassword);
//       const salt = await bcrypt.genSalt(10);

//       const Secpassword = await bcrypt.hash(userPassword, salt);
//       console.log("secpassword=>", Secpassword);
//       Phase1body.userName = userName;
//       Phase1body.userPassword = Secpassword;

//       const token = jwt.sign({ Name, email }, process.env.JWT_ACC_ACTIVATE, { expiresIn: '20m' })
//       const data = {
//         from: 'noreply@crossteam.com',
//         to: body.email,
//         subject: 'Account Activation Link',
//         html: `
//                 <h2>Please click on the given link to activate your account</h2>
//                 <div><h4> Your User name is <i>${userName}</i> and password is <i>${userPassword}</i> </h4></div>
//                 <p>${process.env.CLIENT_URL}/authentication/activate/${token}</p>
//             `
//       };
//       mg.messages().send(data, function (error, body) {
//         if (error) {
//           return res.json({
//             error: error.message
//           })
//         }
//         return res.json({
//           message: 'Email has been sent, kindly activate your account'
//         })
//       });
//       await baseRepo.baseCreate(RegisterModel, Phase1body);
//     }
//   } catch (err) {
//     console.log("Error=>", err);
//     return res.status(400).json({ message: err });
//   }




// }


async function ActivateAccount(req, res) {
  const { token } = req.body

  if (token) {
    jwt.verify(token, process.env.JWT_ACC_ACTIVATE, async function (err, decodedToken) {

      if (err) {
        return res.status(400).json({ error: "Incorrect or Expired Link" })
      }
      else {
        try {
          const { email } = decodedToken;
          const user = await RegisterModel.findOne({ email });
          user.activate = true;
          await baseRepo.baseCreate(RegisterModel, user);
          return res.status(200).json({ message: "account activated successfully" })
        }
        catch (error) {
          return res.status(400).json({ error: "Error while activating account" })
        }

      }
    })
  }
}
