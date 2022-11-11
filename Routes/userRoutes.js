const router = require("express").Router();

const Register = require("../Controllers/Register"); 
const ActivateAccount = require("../Controllers/Register"); 
const Authorization = require("../Controllers/userAuthorization");
const feedback = require("../Controllers/Feedback");
const trainer = require("../Controllers/Trainer");
const Domain = require("../Controllers/Domain");
 
//user Registration
// router.post("/Registration",Register.Registration);
router.post("/email-activate",ActivateAccount.ActivateAccount);
router.post("/UniversityRegistration" , Register.UniversityRegistration);
router.post("/ITRegistration" , Register.ITRegistration);

//User Authorization
router.post("/Login", Authorization.userLogin);

//user Registration

//Feedback apis
router.post("/Feedback", feedback.Feedback);

//TrainerApis
router.post("/addTrainer", trainer.addTrainer);
router.get("/getTrainer", trainer.getTrainers);
router.put("updateTrainer/:trainerId", trainer.updateTrainer);
router.delete("/delete/:trainerId", trainer.deleteTrainer);
//Domain apis
router.post("/AddDomain",Domain.AddDomain);
router.get("/GetDomain",Domain.GetDomain);
router.delete("/DeleteDomain/:id",Domain.DeleteDomain);
router.put("/UpdateDomain",Domain.UpdateDomain);


module.exports = router;
