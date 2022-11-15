const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const universitySchema = mongoose.Schema({
    userMetaId:{
        type:ObjectId,
    },

    UniversityName:{ 
        type:String,

    },
    UniversityPhone:{ 
        type:Number,
    },
    City:{
        type:String
    },
    State:{
        type:String
    },
    Country:{
        type:String
    },
    ReposManagerName:{
        type:String,
    },
    ReposManagerEmail:{
        type:String,
    },
    ReposManagerDesignation:{
        type:String,
    },
    ReposManagerContactNo:{
        type:Number,
    },
    ReposManagerDepartment:{
        type:String,
    },
    TraineeQualification:{
        type:String,
    },
    TotalTraineeNo:{
        type:Number,
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String,
    },
    PreRequisite:{
        type:String
    },
    // trainTheTrainer:{
    //     type:String,
    // },
    Courses:{
        type:[String]
    },
    TrainingMode:{
        
    },
    ProjectType:{
        type:String
    },
    TrainingMedia:{
        type:[String]
    },
    ActivateAwareness:{
        type:Boolean
    },
    Certification:{
        type:Boolean
    },
    PanImage:{
        type:String
    },
    AadharImage:{
        type:String
    },
    
},{timestamps:true});

module.exports = mongoose.model("UniversityModel", universitySchema);