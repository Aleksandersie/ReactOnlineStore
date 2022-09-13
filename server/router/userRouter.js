const Router = require('express')
const  router = new Router()
const UserController = require('../controllers/userController')
const AuthMiddleware = require('../ErrorMiddleware/AuthMiddleware')

router.post('/registration', UserController.registration )

router.post('/login', UserController.login)

router.get('/auth',AuthMiddleware, UserController.auth)


module.exports = router