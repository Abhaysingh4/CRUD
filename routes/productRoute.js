const express = require('express');
const { allProducts } = require('../controllers/product');
const router = express.Router();

router.get('/all_products', allProducts);

// router.post('/new_product', newProduct);

// router.put('/edit_product', editProduct);

// router.delete('/delete_product', deleteProduct);
module.exports = router;