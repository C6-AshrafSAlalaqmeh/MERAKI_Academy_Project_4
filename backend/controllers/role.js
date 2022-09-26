const roleModel = require('../models/RoleSchema')


const CreateRole = (req , res)=>{
    const {role , permission } = req.body
    const roleInstance = new roleModel (
        {
            role ,
            permission
        }
    )
    roleInstance.save()
    .then((result)=>{
        res.status(200).json({ message : "Create Role" , Role : result})
    })
    .catch((err)=>{
     res.status(400).json({message:"Error Server"})
    })
} 

module.exports = { CreateRole}