const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

//Product model
const Product = require('../../models/Product');

// route GET api/products
// access public
router.get('/', (req, res) => {
    Product.find()
        .sort({ number: -1})
        .then(products => res.json(products))
});

// delete /api/products/:id
// access private
router.delete('/:id', auth, (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({ deleted: true}))
        .catch(err => res.status(404).json({ deleted: false}))
    );
});

// route POST api/products
// access private
router.post('/', (auth, jsonParser), (req, res) => {
    const name = req.body;
    const newProduct = new Product({
        name: req.body.name
        //number: req.body.number
    });
    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(404).json({ name }));
});

module.exports = router;