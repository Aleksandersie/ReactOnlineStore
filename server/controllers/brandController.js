const {Brand} = require('../dbModels/dbModels')

class BrandController{
    async create(req,res){
          const {name}=req.body
          const brand = await Brand.create({name})
          return res.json(brand)
    }

    async getAll(req,res){
        const find = await Brand.findAll()
        return res.json(find)
    }


}

module.exports = new BrandController()