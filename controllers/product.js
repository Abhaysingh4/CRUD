const productModel = require('../models/product')

exports.allProducts=async (req,res)=>{
    try {
       
        const product = await productModel.find({});
        res.send(product)
    }
    catch (error) {
        console.log("error in getting products");
        res.send('error');
    }
}