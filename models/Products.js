const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const productSchema = new Schema({
//     id: { type: Number},
//     brand_name: {type: String},
//     prod_name: {type: String},
//     prod_link: {type: String},
//     img_link: {type: String},
//     reviews: {type: Array},
// });
const productSchema = new Schema({
    id: { type: Number},
    brand_name: {type: String},
    prod_name: {type: String},
    prod_link: {type: String},
    price: {type: String},
    category: {type: String},
    img_link: {type: String},
    Benefits: {type: String},
    Details: {type: String},
    Usage: {type: String},
    Ingredients: {type: String},
    reviews: {type: Array},
    key_ingredients: {type: Object},
});
module.exports = mongoose.model('products', productSchema)