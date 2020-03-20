const http = require('http');
const fs = require('fs');
const express = require('express');
const app = new express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'), {useNewUrlParser:true};
app.set('view engine','ejs');
app.use(express.static('puplic'));


app.listen(3000,()=>{
   console.log("App listening on port 3000")
    });

app.get('/adminsite', (req,res) =>{
   res.render('adminsite')
});

app.get('/classSiteUser', (req,res) =>{
    res.render('classSiteUser')
});

app.get('/classSiteAdmin', (req,res) =>{
    res.render('classSiteAdmin')
});

app.get('/loggedIn', (req,res) =>{
    res.render('loggedIn')
});

app.get('/logoutAdmin', (req,res) =>{
    res.render('logoutAdmin')
});

app.get('/logoutUser', (req,res) =>{
    res.render('logoutUser')
});

app.get('/myClasses', (req,res) =>{
    res.render('myClasses')
});

app.get('/register', (req,res) =>{
    res.render('register')
});

app.get('/login', (req,res) =>{
    res.render('login')
});

app.get('/myPageUser', (req,res) =>{
    res.render('myPageUser')
});
