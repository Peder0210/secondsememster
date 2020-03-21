const mongoose = require('mongoose');


const lesson = require('./models/lesson');
const administrator = require('./models/administrator');

mongoose.connect('mongodb://localhost:27017/wow'), {useNewUrlParser:true};

administrator.create({
    Username: "String",
    Password: "String",

});