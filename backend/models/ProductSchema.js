const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        nameFood :{type : String , required : true},
        avarage :{type : Number},
        img : {type : img},
        listId : [{type : mongoose.Schema.Types.ObjectId , ref:'List' }]
    }
)

module.exports = mongoose.model('Product' ,productSchema )