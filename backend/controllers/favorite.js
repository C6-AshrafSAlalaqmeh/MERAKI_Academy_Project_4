const favoriteModel = require('../models/favorite')


const CreateFavorite =(req , res)=>{
    const {itemid , userid} = req.body ; 
    const favoritInstace = new favoriteModel(
        {
            itemid ,
            userid

        }
    )
    favoritInstace.save()
    .then((result)=>{
     console.log(result)
     res.status(201).json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
}



const getFavorite =(req , res)=>{
    favoriteModel.find({})
    .populate('itemid')
    .exec()
    .then((result)=>{
    res.status(201).json({result : result})
    })
    .catch((err)=>{
        console.log(err)
    })
}



module.exports = { CreateFavorite , getFavorite}