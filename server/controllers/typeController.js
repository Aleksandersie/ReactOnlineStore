const {Type} = require('../dbModels/dbModels')

class TypeController{
    async create(req,res){

        const {name}=req.body
        const type = await Type.create({name})
        return res.json({name})
    }

    async getAll(req,res){
        const find = await Type.findAll()
        return res.json(find)
    }


}

module.exports = new TypeController()