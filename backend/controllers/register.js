const userModel =require('../models/userSchema')

const register = (req , res) =>{
    const {firstName , lastName ,phone ,country ,email , password} =req.body
    const registerInstance = new userModel (
        {
            firstName ,
            lastName,
            phone,
            country,
            email ,
            password

        }
    )
    registerInstance.save()
    .then((result)=>{
     res.status(200)
     res.json({success : true , message :'Account Created Successfully', author:result })
    })
    .catch((err)=>{
      if(err.keyPattern){
        res.status(409)
        res.json({success:false , message: `The email already exists`,})
      }
      else{
        res.status(409)
        res.json({success:false , message: `Server Error`, Error:err})
      }
    })
}


const login = (req , res)=>{
    const { email ,password}= req.body
    userModel.find({email})
    .then((result)=>{
        if(!result.length){ 
        res.status(404)
        res.json({message :" The email doesn't exist"})
        }
        else{
            res.status(200)
            res.json({message :"Success Login"})
        }
    })
    .catch((err)=>{
     res.status(500)
     res.json({message : 'Error Servor'})
    })
    
}


module.exports= {register , login}
