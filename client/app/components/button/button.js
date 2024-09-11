'use client'

import React, {useState} from 'react';
import styles from './button.module.css';

const Button = ({productId, shopId}) => {
    const [isAdded, setIsAdded] = useState(false)
    const handleClick = () => {

        console.log(`productId: ${productId}`);
        console.log(`shopId: ${shopId}`);
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