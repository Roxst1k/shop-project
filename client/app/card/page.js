'use client'
// import Loader from "@/app/components/loader/loader";
// import Modal from "@/app/components/modal/modal";
import {useMyContext} from "@/app/services/context";
import styles from './card.module.css'
import {useEffect, useState} from "react";
import {deleteProductFromCard, getAllShops, getCard} from "@/app/services/api";



export default function CardPage() {
    const [card, setCard] = useState([])
    const [quantity, setQuantity] = useState(0);
    const {state, dispatch} = useMyContext()

    console.log(card[0]?.products[0]?._id)

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const card = await getCard();
                if (card) {
                    setCard(card);
                } else {
                    console.error('No shops data returned.');
                }

            } catch (e) {
                console.log(e)
            }
        }

        fetchCard()
    }, []);


    const handleClick = (e) => {
        if (e.target.textContent === '+') {
            setQuantity(prevState => prevState + 1);
        } else if(e.target.textContent === '-') {
            setQuantity(prevState => prevState - 1)
        }
    }


    const handleDeleteProduct = (productId) => {
        const deleteProduct = async () => {
            try {
                const deletedProduct = await deleteProductFromCard(productId);
                console.log(deletedProduct)
            } catch (err) {
                console.log(err)
            }
        }

        deleteProduct()
    }


    const totalPrice = card[0]?.products.reduce((acc, prod) => {
        return acc + (prod.price * quantity);
    }, 0);

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.formAdd}>
                </div>
                <div className={styles.cardProducts}>
                    {card[0]?.products.map((product) => (
                        <div key={product._id} className={styles.cardProduct}>
                            <div className={styles.cardImage}></div>
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
                                            onClick={(e) => handleClick(e)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className={styles.buttonMinus}
                                            onClick={(e) => handleClick(e)}
                                            disabled={quantity <= 0}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={styles.buttonDelete}
                                onClick={() => handleDeleteProduct(product._id)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.addOrder}>
                <p className={styles.totalPrice}>Загальна ціна: {totalPrice}</p>
                <button className={styles.addOrderButton}>Замовити</button>
            </div>
        </div>
    )
}