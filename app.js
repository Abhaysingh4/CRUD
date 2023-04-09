const express = require('express')
const mongoose= require('mongoose');
const seedDb = require('./seedDB');
const productRoutes=require('./routes/productRoute')

const app = express();
    // mongoose.connect("mongodb+srv://nathabhay249:abhay@cluster0.edouzkr.mongodb.net/")
    mongoose.connect("mongodb://127.0.0.1:27017/crud")
    .then(() => console.log('db connected'))
    .catch((err)=>console.log('error'));

// seedDb();

app.use('/product', productRoutes);


app.listen(4000, () => {
    console.log("server started listening");
})