const db = require('../Helper/db')
const UserModel = require('../models/User')
const bcrypt = require('bcryptjs')

const signup = async(req,res) =>{
    const {name,email,password} = req.body
    const hashpassword =await bcrypt.hash(password,10)
    const newuser = {name,email,password:hashpassword}
    try{
        const user_data = await UserModel.create(newuser)
        res.json(user_data)

    }
    catch(err){
        return res.status(500).json(err)
    }


} 

const login = async(req,res) => {
    const{name,password} = req.body
    try{
        const user = await UserModel.findOne({name})
        if(!user)
            {
                return res.status(400).json('invalid user name')
            }

        const ismatch = await bcrypt.compare(password,user.password)

        if(!ismatch)
        {
            return res.status(400).json("password not match")
        }
        else
        {
            return res.status(200).json("login successfull")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
    

}

module.exports = {signup,login}