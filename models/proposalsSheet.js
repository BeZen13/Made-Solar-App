const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proposalsSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    dateInputed: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("proposalsSheet", proposalsSchema)