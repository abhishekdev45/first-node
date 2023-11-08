const User = require('../models/user');

exports.postUserData = async (req,res)=>{
    try{
        if(!req.body.email){
            throw new Error("no email there")
        }
        
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
      
        const data = await User.create({name:name,email:email,phone:phone});
        res.status(201).json({newUserData:data});
    }catch(e){
       
       res.status(500).json({error:e});
    }
  
}

exports.getUserData = async (req,res)=>{
    try{
       const data = await User.findAll();
       res.status(200).json({allUser:data})
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.postDeleteData = async (req,res)=>{
    try{
        if(!req.params.id == "undefined"){
           return res.status(400).json({err:"id not found"})
        }
        const userId = req.params.id;
       await User.destroy({where:{id:userId}});
       res.sendStatus(200);
       }catch(e){
        res.status(500).json({error:e})
    }


}