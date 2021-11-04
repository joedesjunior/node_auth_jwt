require('dotenv').config(); 

const express = require('express'); 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const app = express(); 

app.get("/", (req, res) => {
    res.status(200).json({msg: 'Bem Vindo a Nossa API'});
})

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS; 


mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.clpcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then( () => {
        app.listen(3000);
        console.log('Connected Successfull!');
}).catch((err) => {
    console.log(err);
})

