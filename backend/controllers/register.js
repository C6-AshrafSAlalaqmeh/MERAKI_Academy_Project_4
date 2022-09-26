const registerModel =require('../models/userSchema')

const register = (req , res) =>{
    const {firstName , lastName ,phone ,country ,email , password} =req.body
    const registerInstance = new registerModel (
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

module.exports= {register}
