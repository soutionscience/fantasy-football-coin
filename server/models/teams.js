const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let team = new Schema({
    name: String,
    position: Number,

})

module.exports = mongoose.model('team', team)