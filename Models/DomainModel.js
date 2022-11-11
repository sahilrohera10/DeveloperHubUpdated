const mongoose= require('mongoose')

const DomainSchema = mongoose.Schema({

    Name:{
        type:String,
        required:true,
        unique:true
    },
  
})
module.exports= mongoose.model('Domain',DomainSchema);
