const productModel = require('../models/product')

exports.allProducts = async (req, res) => {
    try {
       
        const product = await productModel.find({});
        res.send(product)
    }
    catch (error) {
        console.log("error in getting products");
        res.send('error');
    }
};
exports.newProduct = async (req, res) => {
    try {
        const { name, price, desc } = req.body;
        // await productModel.create({ name, price, desc });
        const newProduct = new productModel({
            name, price, desc
        });
        await newProduct.save();
        console.log('product added')
        // res.send('new')
    }
    catch (error) {
        console.log("error in new products");
        res.send('error');
    }
};