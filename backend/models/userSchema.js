const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        firstName :{type : String , required:true} ,
        lastName :{type : String} ,
        Phone : {type : Number},
        country : {type : String} ,
        email : {type : String , required :true , unique:true},
        password : {type : String , required:true} ,
        role : {type : mongoose.Schema.Types.ObjectId , ref :"Role"}
    }
)

userSchema.pre('save' , async function(){
 this.password = await bcrypt.hash(this.password , 10)
})
module.exports = mongoose.model('User' , userSchema)