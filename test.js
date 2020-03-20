const mongoose = require('mongoose');

const UserData = require('./models/userData');

mongoose.connect('mongodb://localhost:27017/wow'), {useNewUrlParser:true};

UserData.create({
    Username: 'Peder',
    Password: '1234'
});