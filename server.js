////////////////////////
// import dependencies
////////////////////////

const express = require('express')
//const app = require('liquid-express-views')
const app = express()

app.get('/', (req,res) => {
    res.send(`TechSpace Homepage`)
})

const port = 3000


app.listen( port, ()=> {
    console.log(`Listening to TechSpace ${port}`)
})