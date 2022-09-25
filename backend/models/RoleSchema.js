const mongoose = require('mongoose')

const roleSchema = mongoose.Schema(
    {
        role : {type : String , required : true},
        permission :{type : String}
    }
)

module.exports = mongoose.model('Role' , roleSchema)