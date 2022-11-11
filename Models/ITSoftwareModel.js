const mongoose= require('mongoose')


const ITSoftwareSchema = mongoose.Schema({
    
    userMetaId:{
        type:ObjectId
    },
    ITName:{ 
        type:String,
    },
    ITEmail:{ 
        type:String,
    },
    ITPhone:{ 
        type:Number,
    },
    CnName:{
        type:Object,
    },
    // Qualification:{
    //     type:String
    // },
    preRequisite:{
        type:String
    },
    Course:{
        type:[String]
    },
    TrainingMode:{
        type:String
    },
    ProjectType:{
        type:String
    },
    TrainingMedia:{
        type:[Array]
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
    
})
module.exports= mongoose.model('ITSoftwareModel',ITSoftwareSchema);
