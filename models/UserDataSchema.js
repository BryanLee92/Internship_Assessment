const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infomationSchema = new Schema(
    {
        fullName: {type: String, required: true},
        dateOfBirth: {type: String, required: true},
        address: {type: String, required: true},
        postcode: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
    },
    {Timestamp: true}
)

const infomation = mongoose.model("infomation", infomationSchema)
module.exports = infomation;