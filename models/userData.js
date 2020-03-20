const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDataSchema = new Schema ({
    Username: String,
    Password: String,
    Navn: String,
    Birthday: String,
    Gender: String,
    MobilNummer: String,
    Email: String,

});

const userData = mongoose.model('userData', userDataSchema);
module.exports = userData;