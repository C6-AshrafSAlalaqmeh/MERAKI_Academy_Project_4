const listModel = require('../models/ListSchema')

const createListFood = (req ,res)=>{
    const {typeFood , img} = req.body ;
    const listInstance = new listModel({
        typeFood,
        img

    })
    listInstance.save()
    .then((result)=>{
    res.status(201)
    res.json({success: true , message: "Success Operation",List :result })
    })
    .catch((err)=>{
console.log(err)
    })
}

module.exports ={createListFood}