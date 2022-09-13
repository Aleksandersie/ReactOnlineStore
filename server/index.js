require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const dbModels = require('./dbModels/dbModels')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require ('./router/indexRouter')
const path = require('path')
const ErrorMiddlewear = require ('./ErrorMiddleware/ApiErrorMiddlewear')

const port = process.env.port

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname,'static')))
app.use('/api', router )


/////
app.use(ErrorMiddlewear)


const start = async() =>{
    try{
        await sequelize.authenticate()
        await  sequelize.sync()
        app.listen( port, ()=> console.log(`start ${port}`))
    }catch (err){
        console.log(err)
    }
}

start()


