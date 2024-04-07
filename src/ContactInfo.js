
const mongoose = require("mongoose")

const contactInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    submissionDate: Date
})

module.exports = mongoose.model("ContactInfo", contactInfoSchema)