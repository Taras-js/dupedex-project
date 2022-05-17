const mongoose = require('mongoose')
const Schema = mongoose.Schema


const customerSchema = new Schema({
    ip: {type: String},
    phone: {type: String},
    pin: {type: Number}
});
module.exports = mongoose.model('customer', customerSchema)