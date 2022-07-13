////////////////////////
// import dependencies
////////////////////////

const express = require('express')
const app = require('liquid-express-views')

app.get('/', (req,res) => {
    res.send(`TechSpace Homepage`)
})

const port = 3000


app.listen(port, () => { 
    console.log(`TechSpace is running on ${port}`)
})