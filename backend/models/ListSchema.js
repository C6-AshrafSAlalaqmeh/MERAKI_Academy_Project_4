const mongoose = require('mongoose')

const listSchema = new mongoose.Schema(
    {
      typeFoode: {type : String , required :true},
      img :{type: String}
    }
) 
module.exports=mongoose.model('List' , listSchema)