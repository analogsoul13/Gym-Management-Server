const clients = require('../Models/clientModel')


exports.addClient = async (req, res) => {
    try {
        const { first_name, last_name, email, phone } = req.body
        const image = req.file.filename
        const trainerId = req.payload
        //console.log(data,image,trainerId)
        const newClient = new clients({
            first_name, last_name, email, phone, image, trainerId
        })
        await newClient.save()
        res.status(201).json(newClient)

    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

exports.getClients = async (req, res) => {
    try {
        const trainerid = req.payload
        const clientlist = await clients.find({ trainerId: trainerid })
        res.status(200).json(clientlist)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.deleteClient = async (req, res) => {
    try {
        const { cid } = req.params
        console.log(cid)
        const result = await clients.findByIdAndDelete(cid)
        res.status(200).json("Deleted")
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

exports.updateClient = async (req,res) => {
    try {
        const {cid} = req.params
        if(req.file){
            var image = req.file.filename
            var {first_name, last_name, email, phone} = req.body
        }
        else{
            var {first_name, last_name, email, phone,image} = req.body
        }
        const existing = await clients.findById(cid)
        existing.first_name = first_name
        existing.last_name = last_name
        existing.email = email
        existing.phone = phone
        existing.image = image
        await existing.save()
        res.status(200).json(existing)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}