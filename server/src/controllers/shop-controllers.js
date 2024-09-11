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

