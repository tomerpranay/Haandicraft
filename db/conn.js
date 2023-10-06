const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Haandicraft" , {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
// }).then((result) => {
//    console.log(`success!`); 
// }).catch((e) => {
//     console.log(`failure!`);
// });
// // const mongoose = require('mongoose');

// Define your MongoDB connection URL (replace with your actual MongoDB URI)
const mongoURI = 'mongodb://127.0.0.1:27017/Haandicraft';

// Establish a connection to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

const db = mongoose.connection

// Handle database connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Export the Mongoose connection
module.exports = db;

