const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    //number: {
    //    type: Number,
    //    required: false
    //},
});

module.exports = Product = mongoose.model('product', ProductSchema);