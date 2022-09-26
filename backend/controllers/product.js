const porductModel = require('../models/ProductSchema')

const createNewProduct =(req , res) =>{
    const {nameFood , avarage ,img ,short_desc,Ingredients , Method ,listid}=req.body
    const productInstance = new porductModel({
        nameFood,
        avarage ,
        img ,
        short_desc ,
        Ingredients ,
        Method ,
        listid
    })
    productInstance.save()
    .then((result)=>{
res.status(201)
res.json({success: true ,message: "Success Operation" , Product :result })
    })
    .catch((err)=>{
    res.status(500)
    res.json({success: false , success: false , ERROR:err})
    })
}

const getProductByName =(req , res)=>{
    const productName = req.query.name
    porductModel.find({nameFood : productName})
    .then((result)=>{
        console.log(result)
        if(!result.length){
        res.status(404)
        res.json({success: false , message: `The product is not found`})
        }
        else{
        res.status(200)
        res.json({success:true , message: `The product with name⇾ ${productName}`,product:result })
        }
    })
    .catch((err)=>{
        res.status(500)
        res.json({ success: false, message: "Server Error", Error : err })
    })
}

const updateproduct = (req ,res)=>{
    const productId = req.params.id
    const {nameFood ,avarage ,short_desc }= req.body
    porductModel.findOneAndUpdate({_id : productId} , {nameFood , avarage ,short_desc} , {new : true})
    .then((result)=>{
   console.log(result)
    })
    .catch((err)=>{
console.log(err)
    })
}


module.exports = { createNewProduct , getProductByName ,updateproduct}