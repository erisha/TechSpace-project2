////////////////////////
// import dependencies
////////////////////////

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const profileRoutes = require('./routes/profile_routes')
const userRoutes = require('./routes/user_routes')
const commentRoutes = require('./routes/comment_routes')
const blogPostRoutes = require('./routes/blogPost_routes')




////////////////////////////
//Create Express App Object
////////////////////////////

const app = require('liquid-express-views')(express())


////////////////////////////////////
// Middleware
//////////////////////////////////
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const session = require('express-session')
const MongoStore = require( 'connect-mongo' ).default


//set up sessions
app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)
//////////////////////
//Routes
///////////////////////


app.use('/blogPost', blogPostRoutes)
app.use('/users', userRoutes)
app.use('/comments', commentRoutes)
app.use('/profile', profileRoutes)
// localhost:3000/

app.get('/', (req, res) => {
	//res.send('TechSpace Homepage')
	res.redirect('/techSpace')
})





///////////////////
// Server Listener
///////////////////
const PORT = process.env.PORT

app.listen( PORT, ()=> {
    console.log(`Listening to TechSpace ${PORT}`)
})