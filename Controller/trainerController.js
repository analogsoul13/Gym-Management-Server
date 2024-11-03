const trainers = require('../Models/trainerModel')
const jwt = require('jsonwebtoken')


exports.trainerRegistration = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            res.status(406).json("Invalid Inputs !!")
        }
        else {
            const newUser = new trainers({
                email, username, password   //key and value are same
            })
            await newUser.save()
            res.status(201).json(newUser)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

exports.trainerLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const existingtrainer = await trainers.findOne({ email, password })
        if (existingtrainer) {
            const token = jwt.sign({userId:existingtrainer._id},process.env.SECRET_KEY)
            res.status(200).json({token, username:existingtrainer.username})
        }
        else {
            res.status(406).json("Invalid email or password !")
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}