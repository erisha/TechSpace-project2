const mongoose = require('mongoose');

// Fire off the connection to Mongo DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Could not connect to MongoDB!", err);
});


mongoose.connection

    .on('open', () => console.log('Connected to Mongoose'))
    
    .on('close', () => console.log('Disconnected from Mongoose'))
    
    .on('error', err => console.error(err))






module.exports = mongoose