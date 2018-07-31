const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User = new Schema({
    username: String,
    password: String,
    address: String,
    OauthId: String,
    OauthToken: String,
    firstname: {
    	type: String,
    	default: ''
    },
    lastname:{
    	type: String,
    	default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', User)