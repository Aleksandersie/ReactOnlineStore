const Router = require('express');
const router = new Router()
const userRouter = require('./userRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const bardRouter = require('./brandRouter')

router.use('/brand', bardRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/user', userRouter)

module.exports = router