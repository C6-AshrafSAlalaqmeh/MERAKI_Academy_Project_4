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
        res.status(404).json(err)
    })
}



const getFavorite =(req , res)=>{
   const userId = req.params.id
    favoriteModel.find({userid : userId})
    .populate('itemid')
    .exec()
    .then((result)=>{
    res.status(201).json({result : result})
    })
    .catch((err)=>{
        res.status(404).json(err)
    })
}

const deleteFavorite = (req , res)=>{
  const favoriteId = req.params.id
  favoriteModel.findOneAndDelete({_id:favoriteId})
  .then((result)=>{
    res.status(200).json(result)
  })
  .catch((err)=>{
    res.status(404).json(err)
  })
}


module.exports = { CreateFavorite , getFavorite, deleteFavorite}