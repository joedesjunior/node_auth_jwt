require('dotenv').config(); 

const express = require('express'); 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const app = express(); 

app.use(express.json());

const User = require('./models/User.js'); 

app.get("/api", (req, res) => {
    res.status(200).json({msg: 'Bem Vindo a Nossa API'});
})

app.post("/api/auth/register", async (req, res) => {

    const { name, mail, password, confirmPassword } = req.body;

    if (!name) {
        return res.status(400).json({
            msg: "Name is Empty!"
        })
    }

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



