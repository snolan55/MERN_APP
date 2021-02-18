const express = require('express');
const router = express.Router();

//Product model
const Product = require('../../models/Product');

// route GET api/items
// access public
router.get('/', (req, res) => {
    Product.find()
        .sort({ number: -1})
        .then(products => res.json(products))
});

// delete /api/items/:id
router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => product.remove().then(() => res.json({ deleted: true}))
        .catch(err => res.status(404).json({ deleted: false}))
    );
});

// route POST api/items
// access public
router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        number: req.body.number
    });

    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(404).json({ posted: false}));
});

module.exports = router;