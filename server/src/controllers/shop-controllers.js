import {Shop} from "../models/shop.js";

export const getShops = (req, res) => {
    Shop
        .find({})
        .then(shops => {
            res
                .status(200)
                .json(shops);
        })
        .catch(err => console.log(err));
}

export const getShopById = (req, res) => {
    const {shopId} = req.params;

    Shop
        .findById(shopId)
        .then((shop) => {
            if (shop) {
                res
                    .status(200)
                    .json(shop);
            } else {
                res
                    .status(404)
                    .json({message: 'Not Found'});
            }
        })
}


export const getProductsFromShopById = (req, res) => {
    const {shopId} = req.params;

    Shop
        .findById(shopId)
        .then((shop) => {
            if (shop) {
                res
                    .status(200)
                    .json(shop.products);
            } else {
                res
                    .status(404)
                    .json({message: 'Not Found'});
            }
        })
}


export const getProductByShopIdAndProductId = (req, res) => {
    const { shopId, productId } = req.params;

    Shop
        .findById(shopId)
        .then((shop) => {
            if (shop) {
                const product = shop.products.find((product) => {
                    return product.id === productId;
                })
                if (product) {
                    res
                        .status(200)
                        .json(product);
                } else {
                    res
                        .status(404)
                        .json({ message: 'Product not found' });
                }
            } else {
                res
                    .status(404)
                    .json({ message: 'Shop not found' });
            }
        })
        .catch((error) => {
            res
                .status(500)
                .json({ message: 'Server error', error });
        });
};
