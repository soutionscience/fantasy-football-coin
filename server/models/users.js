const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User = new Schema({
    username: String,
    address: String,
    OauthId: String,
    OauthToken: String,
    email: String,
    admin:   {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', User)