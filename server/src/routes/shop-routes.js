import express from 'express';

import {
    getShops,
    getShopById,
    getProductsFromShopById,
    getProductByShopIdAndProductId,
    updateFieldInShopByShopIdAndProductId
} from "../controllers/shop-controllers.js";

export const router = express.Router();

router.get('/', getShops);
router.get('/shop/:shopId', getShopById);
router.get('/shop/:shopId/products', getProductsFromShopById);
router.get('/shop/:shopId/:productId', getProductByShopIdAndProductId);
router.patch('/shop/:shopId/:productId', updateFieldInShopByShopIdAndProductId);


