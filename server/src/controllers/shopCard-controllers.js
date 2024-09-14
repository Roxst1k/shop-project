import {ShopCard} from "../models/shopCard.js";


export const getCard = (req, res) => {
    ShopCard
        .find({})
        .then(card => {
            res
                .status(200)
                .json(card);
        })
        .catch(err => console.log(err));
}

export const addProductToCard = (req, res) => {
    const { cardId } = req.params;
    const newProduct = { ...req.body };

    ShopCard
        .findOneAndUpdate(
            { _id: cardId },
            { $push: { products: newProduct } },
            { new: true }
        )
        .then((card) => {
            if (!card) {
                return res.status(404).json({ message: 'Card not found' });
            }
            res.status(201).json(card);
        })
        .catch(err => {
            console.error('Error updating card:', err);
            res.status(500).json({ message: 'Failed to update card' });
        });
};

export const removeProductFromCard = (req, res) => {
    const { cardId, productId } = req.params;

    ShopCard
        .findOneAndUpdate(
            { _id: cardId },
            { $pull: { products: { _id: productId } } },
            { new: true }
        )
        .then((card) => {
            if (!card) {
                return res.status(404).json({ message: 'Card not found' });
            }
            res.status(200).json(card);
        })
        .catch(err => {
            console.error('Error removing product:', err);
            res.status(500).json({ message: 'Failed to remove product' });
        });
};
