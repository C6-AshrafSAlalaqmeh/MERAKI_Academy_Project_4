const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema(
    {
        itemid :{type : mongoose.Schema.Types.ObjectId , ref :'Product'},
        userid : {type : mongoose.Schema.Types.ObjectId , ref :'User'}

    }
)

module.exports = mongoose.model('Favorite' , favoriteSchema)

