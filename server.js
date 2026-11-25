const express = require('express');
const cors = require('cors');
const { all } = require('../../UserUpdateApp/Backend/routes/userRoutes');
const app = express();
const RORT = 5000;
// Middleware
app.use(cors({
    origin: 'http://localhost:5000', // Allow requests from this origin
methods:["GET","POST"],
    allowHeaders: ['Content-Type', 'Authorization'] // Allow these 
}));
app.use(express.json());
//Authentication Middleware
function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (token !== 'Bearer mysecrettoken') {
        return res.status(401).json({
            message: "Unauthorized! Invalid or missing token."
        });
    }

    next();
}