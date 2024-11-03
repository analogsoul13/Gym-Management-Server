const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    first_name : {
        type:String,
        required:true
    },
    last_name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone : {
        type:Number,
        required:true,
        unique:true
    },
    image : {
        type:String,
        required:true
    },
    trainerId : {
        type:String,
        required:true
    }
})

const clients = mongoose.model('clients',clientSchema)

module.exports = clients