const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    ip: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('users', usersSchema)