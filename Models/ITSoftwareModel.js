const mongoose = require('mongoose')
const { ObjectId } = require("mongodb");


const ITSoftwareSchema = mongoose.Schema({

    userMetaId: {
        type: ObjectId
    },
    ITName: {
        type: String,
    },

    ITPhone: {
        type: String,
    },
     City: {
        type: String,
    },
    State: {
        type: String,
    },
    Country: {
        type: String,
    },
   
    preRequisite: {
        type: String
    },
    Courses: {
        type: [String]
    },
    TrainingMode: {
        type: String
    },
    ProjectType: {
        type: String
    },
    TrainingMedia: {
        type: [String]
    },
    ActivateAwareness: {
        type: Boolean
    },
    Certification: {
        type: Boolean
    },
    PanImage: {
        type: String
    },
    AadharImage: {
        type: String
    },

})
module.exports = mongoose.model('ITSoftwareModel', ITSoftwareSchema);
