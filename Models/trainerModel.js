const mongoose = require('mongoose')


const trainerSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const trainers = mongoose.model('trainers',trainerSchema)

module.exports = trainers