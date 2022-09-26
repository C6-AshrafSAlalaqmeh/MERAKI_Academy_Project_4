const userModel =require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { options } = require('../routes/user')


const register = (req , res) =>{
    const {firstName , lastName ,Phone ,country ,email , password ,role} =req.body
    const registerInstance = new userModel (
        {
            firstName ,
            lastName,
            Phone,
            country,
            email ,
            password,
            role

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
    .populate("role")
    .exec()
    .then(async (result)=>{
        if(!result.length){ 
        res.status(404)
        res.json({message :" The email doesn't exist"})
        }
        else{
            //console.log(result[0].password)
            // res.status(200)
            // res.json({message :"Success Login"})
            const passwordStored = result[0].password
            const passwordCheck = await bcrypt.compare(password , passwordStored)

            if(!passwordCheck){
                //console.log(result[0]._id)
              return (  res.status("404").json({message : "The password is incorrect"}))
            }
           
           const payload ={
                userId : result[0]._id ,
                firstName : result[0].firstName ,
                role : result[0].role

            }
            console.log(payload)
            const SECRET = process.env.SECRET

           const  options ={
                expiresIn : "1h",
             }

          const token = await jwt.sign(payload , SECRET , options)
          console.log(token)
          res.status(200)
          res.json({
            message : 'Successed Login' ,
            Token : token
            
          })
        }
    })
    .catch((err)=>{
     res.status(500)
     console.log(err)
     res.json({message : 'Error Servor' , Error: err})
    })
    
}


module.exports= {register , login}
