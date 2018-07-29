const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let customer = new Schema({
    email: String,
    address: String,
    teams: [team]
    account: Int

})