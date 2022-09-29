const porductModel = require('../models/ProductSchema')

const createNewProduct =(req , res) =>{
    const {nameFood , avarage ,img ,short_desc,Prep,Cook,Ingredients , Method ,listId}=req.body
    const productInstance = new porductModel({
        nameFood,
        avarage ,
        img ,
        short_desc ,
        Prep,
        Cook,
        Ingredients ,
        Method ,
        listId
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

const getAllproduct = (req ,res)=>{
    porductModel.find({})
    // .populate('listId')
    // .exec()
    .then((result)=>{
     res.status(201).json({product : result})
    })
    .catch((err)=>{
     res.status(400).json(err)
    })
}

const getProductByName =async (req , res)=>{
try {
    const productName = req.query.name
   const regex = new RegExp( productName , "gi")
   console.log(regex)
   const product = await porductModel.find({
     nameFood : {$regex : regex}
   })
   console.log(product)
   if(product.length){
    return res.status(200).json({success:true ,Product:product })
    
   }

    throw Error
} catch (err){
    res.status(404).json({success: false , message: `The product is not found`})

}

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

const deleteProduct = (req , res)=>{
    const productId = req.params.id
    porductModel.findOneAndDelete({_id:productId})
    .then(()=>{
        console.log("Removed")
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports = { createNewProduct ,getAllproduct, getProductByName ,updateproduct ,deleteProduct}