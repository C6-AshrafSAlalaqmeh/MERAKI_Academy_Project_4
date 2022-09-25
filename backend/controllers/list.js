const listModel = require('../models/ListSchema')

const createListFood = (req ,res)=>{
    const {typeFoode , img} = req.body ;
    const listInstance = new listModel({
        typeFoode,
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