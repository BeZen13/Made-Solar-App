const mongoose = require('mongoose')
const Schema = mongoose.Schema

const leadSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Leads", leadSchema)