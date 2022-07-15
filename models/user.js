///////////////////////////////////////
// Import dependencies
///////////////////////////////////////
const mongoose = require('./connection')

///////////////////////////////////////
// define user model
///////////////////////////////////////

const { Schema, model } = mongoose

// user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// make a user model with the userSchema
const User = model('User', userSchema)


///////////////////////////////////////
// export our user model
///////////////////////////////////////
module.exports = User