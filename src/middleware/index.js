const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
const applyMiddleware = (app)=>{
    
    // middleware
    app.use(cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://mingle-heart.web.app",
            "https://mingle-heart.firebaseapp.com"
        ],
        credentials: true
    }));
    app.use(express.json());
    app.use(cookieParser());
    }
    
    module.exports = applyMiddleware