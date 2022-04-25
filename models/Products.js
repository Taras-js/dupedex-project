const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: { type: Number},
    brand_name: {type: String},
    prod_name: {type: String},
    prod_link: {type: String},
    img_link: {type: String},
    reviews: {type: Array},
});
module.exports = mongoose.model('products', productSchema)