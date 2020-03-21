const http = require('http');
const fs = require('fs');
const express = require('express');
const app = new express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserData = require('./models/userData');
const loginController = require('./controllers/logins');
const loginUserController = require('./controllers/loginUser');

const validateMiddleWare = (req,res,next) => {
    if(req.body.Navn == ''){
        console.log('User not created');
        return res.redirect('/register')
    }
    next()
};

mongoose.connect('mongodb://localhost:27017/wow'), {useNewUrlParser:true};
app.set('view engine','ejs');
app.use(express.static('puplic'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/register/store',validateMiddleWare);

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

app.post('/register/store', (req,res) => {
    console.log(req.body);
    UserData.create(req.body,(error,userdata) =>{
        res.redirect('/login')
    })
});



app.post('/login', loginUserController);