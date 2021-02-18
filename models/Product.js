const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdcutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: false
    },
});

module.exports = Product = mongoose.model('product', ProdcutSchema);