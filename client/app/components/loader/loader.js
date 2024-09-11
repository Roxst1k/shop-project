import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}></div>
            <p className={styles.text}>
                <span className={styles.letter}>L</span>
                <span className={styles.letter}>o</span>
                <span className={styles.letter}>a</span>
                <span className={styles.letter}>d</span>
                <span className={styles.letter}>i</span>
                <span className={styles.letter}>n</span>
                <span className={styles.letter}>g</span>
            </p>
        </div>

    );
};

export default Loader;