const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const ProfSchema = new Schema({

    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    }

})

module.exports = Prof = mongoose.model("prof", ProfSchema)