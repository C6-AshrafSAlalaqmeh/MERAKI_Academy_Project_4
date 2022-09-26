const authorization = (string)=>{
    return (req , res , next)=>{
        const tokenPayload = req.token
        console.log(tokenPayload.role.permission)
        if(tokenPayload.role.permission.includes(string)){
            next()
        }else{
            res.status(403).json('wrong permission')
        }
    }
}

module.exports= authorization