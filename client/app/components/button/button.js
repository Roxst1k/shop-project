'use client'

import styles from './button.module.css';
import {
    addChangeToProduct,
    addProductToCard,
    getAllShops,
    getCard,
    getProductByShopIdAndProductId
} from "@/app/services/api";
import useSWR from "swr";

const Button = ({productId, shopId}) => {
    const fetcher = () => getProductByShopIdAndProductId(shopId, productId);
    const {data: product, mutate: mutateProduct} = useSWR(`http://localhost:5000/shop/${shopId}/${productId}`, fetcher);
    const { mutate: mutateCard} = useSWR('http://localhost:5000/card', getCard)

    const handleAddProduct = () => {
        const addProduct = async () => {
            try {
                await addProductToCard(product?.productName, shopId, product?.price, product?.id);
                await addChangeToProduct(shopId, productId, true)
            } catch (err) {
                console.log(err);
            }
        };

        addProduct()
            .then(() => {
                mutateProduct()
                mutateCard();
            })


    }

    return (
        <button
            className={styles.buyButton}
            onClick={() => handleAddProduct()}
            disabled={product?.isAddToCard}
        >
            {product?.isAddToCard ? 'Товар додано' : 'Замовити'}
        </button>
    );
};

export default Button;