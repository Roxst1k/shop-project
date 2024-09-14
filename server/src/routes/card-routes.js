import express from "express";

import {
    addProductToCard,
    getCard, removeProductFromCard
} from "../controllers/shopCard-controllers.js";


export const router = express.Router();

router.get('/card/', getCard)
router.patch('/card/:cardId', addProductToCard)
router.delete('/card/:cardId/product/:productId', removeProductFromCard);