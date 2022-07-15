const mongoose = require('./connection')
const blogPostSchema = require('./blogPost')

const { Schema, model } = mongoose


const profileSchema = new Schema(
    {
    name: {
        type: String,
        required: true
    },
    profileImage: {
        data: Buffer,
        contentType: String
    },
    AboutMe: {
        type: String
    }, 
    Resume: {
        type: String
    },
    Skills: {
        type: String
    },
    // owner: {
    //     type: Schema.Types.ObjectId, // a single User ._id
    //     ref: 'User', // const User = model('User', userSchema) the string of 'User' is how we reference a model
    // },
    blogPosts: [blogPostSchema]
})

// profile model with profileSchema
const User_Profile = model('User_Profile', profileSchema)
//export user model
module.exports = User_Profile



