const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        nameFood :{type : String , required : true , unique: true},
        avarage :{type : Number},
        img : {type : String},
        short_desc :{type : String},
        Prep :{type : Number}, 
        Cook :{type : Number},
        Ingredients:[{type : String}],
        Method : {type :String} ,
        listId : {type : mongoose.Schema.Types.ObjectId , ref:'List' }
    }
)

module.exports = mongoose.model('Product' ,productSchema )