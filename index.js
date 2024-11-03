require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./Connection/db')
const router = require('./Routes/routes')
const jwt = require('./Middlewares/jwtMiddleware')

const gymServer = express()

gymServer.use(cors())
gymServer.use(express.json())
//gymServer.use(jwt)
gymServer.use(router)

const PORT = 3000 || process.env.PORT

gymServer.listen(PORT, () => {
    console.log("Server Running at :", PORT)
})

gymServer.get('/',(req,res)=>{
    res.send("<h1>Gym Server is Active</h1>")
})