'use client'

import styles from './card.module.css'
import { useState} from "react";
import {
    addChangeToProduct,
    deleteProductFromCard,
    getCard,
} from "@/app/services/api";
import useSWR from "swr";
import RandomImage from "@/app/components/randomImage/randomImage";



export default function CardPage() {
    const { data: card, mutate } = useSWR('http://localhost:5000/card', getCard);
    const [quantity, setQuantity] = useState(1);


    const handleAddQuantity = (e) => {
        if (e.target.textContent === '+') {
            setQuantity(prevState => prevState + 1);
        } else if(e.target.textContent === '-') {
            setQuantity(prevState => prevState - 1)
        }
    }


    const handleDeleteProduct = (productId, shopId) => {
        const deleteProduct = async () => {
            try {
                await addChangeToProduct(shopId,productId, false)
                await deleteProductFromCard(productId);
                await mutate()
            } catch (err) {
                console.log(err)
            }
        }

        deleteProduct()
    }


    // const totalPrice = card[0]?.products.reduce((acc, prod) => {
    //     return acc + (prod.price * quantity);
    // }, 0);

    console.log(card?.[0]?.products.length <= 0)

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formAdd}>
                </div>
                <div className={styles.cardProducts}>
                    {card?.[0]?.products.length <= 0 ? (
                        <h2 className={styles.title}>Товарів не має</h2>
                    ): (
                        card?.[0]?.products.map((product) => (
                            <div key={product._id} className={styles.cardProduct}>
                                <div className={styles.cardImage}>{<RandomImage/>}</div>
                                <div className={styles.productInfo}>
                                    <p className={styles.productTitle}>{product.name}</p>
                                    <div className={styles.inputWrapper}>
                                        <input
                                            type="number"
                                            className={styles.input}
                                            value={quantity}
                                            onChange={(e) => setQuantity(+e.target.value)}
                                        />
                                        <div className={styles.buttonsWrapper}>
                                            <button
                                                className={styles.buttonPlus}
                                                onClick={(e) => handleAddQuantity(e)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className={styles.buttonMinus}
                                                onClick={(e) => handleAddQuantity(e)}
                                                disabled={quantity <= 0}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className={styles.buttonDelete}
                                    onClick={() => handleDeleteProduct(product.productId, product.shopId)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className={styles.addOrder}>
                <p className={styles.totalPrice}>Загальна ціна: </p>
                <button
                    className={styles.addOrderButton}
                    disabled={card?.[0]?.products.length <= 0}
                >
                    Замовити
                </button>
            </div>
        </div>
    )
}