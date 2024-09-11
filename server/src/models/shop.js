import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    products: [productSchema]
});


const Shop = mongoose.model('Shop', shopSchema);
const Product = mongoose.model('Product', productSchema);

export { Shop, Product };