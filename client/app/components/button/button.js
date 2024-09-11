'use client'

import React, {useState} from 'react';
import styles from './button.module.css';
import {getProductByShopIdAndProductId} from "@/app/services/api";
import {useMyContext} from "@/app/services/context";

const Button = ({productId, shopId}) => {
    const [isAdded, setIsAdded] = useState(false)
    // const [product, setProduct] = useState([]);
    const {state, dispatch} = useMyContext()


    const handleClick = () => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductByShopIdAndProductId(shopId, productId);
                // setProduct(fetchedProduct)
                dispatch({type: 'addProductToCard', payload: fetchedProduct});
            } catch (err) {
                console.log(err);
            }
        };
        fetchProduct();
        setIsAdded(true)
    }


    return (
        <button
            className={styles.buyButton}
            onClick={() => handleClick()}
            disabled={isAdded}
        >
            {isAdded ? 'Товар додано' : 'Замовити'}
        </button>
    );
};

export default Button;