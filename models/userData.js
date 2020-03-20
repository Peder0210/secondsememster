const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDataSchema = new Schema ({
    Username: String,
    Password: String
});

const userData = mongoose.model('userData', userDataSchema);
module.exports = userData;