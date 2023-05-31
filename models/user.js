const mongoose = require("mongoose")

const user_schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    otp: {
        type: Number
    },
    is_verified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("user", user_schema)