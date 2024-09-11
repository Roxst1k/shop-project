import express from 'express';

import {
    getShops,
    getShopById, getProductsFromShopById
} from "../controllers/shop-controllers.js";

export const router = express.Router();

router.get('/', getShops);
router.get('/shop/:shopId', getShopById);
router.get('/shop/:shopId/products', getProductsFromShopById);