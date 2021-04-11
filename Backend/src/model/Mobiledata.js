const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@maincluster.lex2l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewMobilesSchema = new Schema({
    Name : String,
    Model : String,
    Storage : String,
    Version : String,
    Review : String,
    CPU: String,
    Price :Number,
    imageUrl : String
});

var Mobiledata = mongoose.model('mobile', NewMobilesSchema);      

module.exports = Mobiledata;