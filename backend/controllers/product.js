const porductModel = require('../models/ProductSchema')

const createNewProduct =(req , res) =>{
    const {nameFood , average ,img ,Ingredients , Method ,listid}=req.body
    const productInstance = new porductModel({
        nameFood,
        average ,
        img ,
        Ingredients ,
        Method ,
        listid
    })
    productInstance.save()
    .then((result)=>{

    })
    .catch((err)=>{

    })
}
module.exports = createNewProduct