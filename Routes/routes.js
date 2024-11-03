const express = require('express')

const trainerController = require('../Controller/trainerController')
const clientController = require('../Controller/clientController')

// jwt router level middleware
const jwtMiddle = require('../Middlewares/jwtMiddleware')
const multerMiddle = require('../Middlewares/multerMiddleware')



const router = express.Router()


router.post('/reg',trainerController.trainerRegistration)
router.post('/log',trainerController.trainerLogin)

router.post('/addclient',jwtMiddle,multerMiddle.single('image'),clientController.addClient)
router.get('/clients',jwtMiddle,clientController.getClients)
router.delete('/delclient/:cid',jwtMiddle,clientController.deleteClient)
router.put('/updateclient/:cid',jwtMiddle,multerMiddle.single('image'),clientController.updateClient)

module.exports = router
