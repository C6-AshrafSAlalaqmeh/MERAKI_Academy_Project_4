const jwt = require('jsonwebtoken')

const authentication =(req ,res ,next)=>{

    if(!req.headers.authorization){
      return  res.send({message : 'Token Not Found'})
    }
    const token = req.headers.authorization.split(" ").pop()
    const SECRET = process.env.SECRET
    jwt.verify(token , SECRET , (err , result)=>{
        if(err){
            res.send({message:'Token is Invalid'})

        }else{
            req.token= result
            next()
        }
    })
}

module.exports= authentication