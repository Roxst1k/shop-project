'use client'

import React, {useEffect, useState} from 'react';
import styles from './button.module.css';
import {addChangeToProduct, addProductToCard, getAllShops, getProductByShopIdAndProductId} from "@/app/services/api";
import {useMyContext} from "@/app/services/context";
import Loader from "@/app/components/loader/loader";

const Button = ({productId, shopId, isAddToCard}) => {
    const [isAdded, setIsAdded] = useState(isAddToCard)
    const {state, dispatch} = useMyContext()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await getProductByShopIdAndProductId(shopId, productId, {
                headers: {
                    'Cache-Control': 'no-store',
                    "cache": "no-cache",
                }
            });
            setProducts(products);
        }

        fetchProduct()
    }, []);


    const handleClick = () => {

        const fetchProduct = async () => {
            try {
                setIsAdded(prevIsAdded => !prevIsAdded)
                await addChangeToProduct(shopId, productId, !isAdded)
                const fetchedProduct = await getProductByShopIdAndProductId(shopId, productId);
                dispatch({type: 'addProductToCard', payload: fetchedProduct});
                await addProductToCard(products?.productName, shopId, products?.price);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProduct();

    }

    return (
        <button
            className={styles.buyButton}
            onClick={() => handleClick()}
            // disabled={isAdded}
        >
            {isAdded ? 'Товар додано' : 'Замовити'}
        </button>
    );
};

export default Button;