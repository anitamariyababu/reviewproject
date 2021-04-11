// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://userone:userone@maincluster.lex2l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Schema Definition
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    address: String,
    role: String
});

// Model Creation
var RegistrationData = mongoose.model('Registrationdata', RegistrationSchema);

module.exports = RegistrationData;