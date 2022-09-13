const ApiError = require('../ApiError/ApiError')
const {User,Basket} = require('../dbModels/dbModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken=(id,email,role)=>{
    return jwt.sign(
        {id,email,role},
        process.env.secret_key,
        {expiresIn: '24h'}
    )
}


class UserController{
    async registration(req,res,next){
        const {email, password, role} = req.body
        if (!email||!password){
            return next(ApiError.badRequest("Ошибка логина или пароля"))
        }
        const candidate = await  User.findOne({where:{email}})
        if(candidate){
            return next (ApiError.badRequest("Пользователь уже существует"))
        }
        let hashPassword = await bcrypt.hash(password,5)
        const user = await User.create({email,password:hashPassword,role})
        const basket = await Basket.create({userId:user.id})
        const token = generateToken(user.id,user.email,user.role)
        return res.json({token})
    }

    async login(req,res,next){
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if (!user){
          return next(ApiError.badRequest("Пользователь не существует"))
        }
        let comparePassword = bcrypt.compareSync(password,user.password)
        if(!comparePassword){
           return next(ApiError.badRequest("Неверный пароль"))
        }
        const token = generateToken(user.id,user.email,user.role)

        return res.json({token})
    }

    async auth(req, res){
         const token = generateToken(req.user.id,req.user.email,req.user.role)
        return res.json({token})

    }

}

module.exports = new UserController()