// using an already connected mongoose not a fresh one from node_modules
const mongoose = require('./connection')
const commentSchema = require('./comment')

// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

const blogPostSchema = new Schema(
	{
		author: String,
		body: {
			type:String,
			max: 500
		},
		owner: {
			type: Schema.Types.ObjectId, // a single User ._id
			ref: 'User', // const User = model('User', userSchema) the string of 'User' is how we reference a model
		},
		img: {
			type: String
		},
		comments: [commentSchema] 
        // a blogPost can have many comments. Comments are a sub doc of blogPost 
	},
	{
		timestamps: true,
	}
)



const BlogPost = model('BlogPost', blogPostSchema)


module.exports = BlogPost