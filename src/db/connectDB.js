const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    console.log('Connecting to db');
    const mongoURL = process.env.VITE_BD_URL;
    await mongoose.connect(mongoURL, { dbName: 'mingleHeart'})
    console.log('connected to database');
}

module.exports = connectDB