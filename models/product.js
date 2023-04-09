const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    desc: {
        type: String,
        trim: true
    }
});

const product = mongoose.model('product', productschema);
module.exports = product;