import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shopId: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
        default: '1',
    }
})

const shopCardSchema = new mongoose.Schema({
    products: [productSchema]
}, {timestamps: true});

const ShopCard = mongoose.model('ShopCard', shopCardSchema);

export {ShopCard};


