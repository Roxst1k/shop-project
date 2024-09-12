'use client'

import styles from './shops.module.css';
import {getAllShops} from "@/app/services/api";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

const Shops = () => {
    const [shops, setShops] = useState([]);
    const pathname = usePathname();



    useEffect(() => {
        const fetchShops = async () => {
            try {
                const shops = await getAllShops();
                if (shops) {
                    setShops(shops);
                } else {
                    console.error('No shops data returned.');
                }
            } catch (err) {
                console.error('Failed to fetch shops:', err);
            }
        };

        fetchShops();
    }, []);

    const currentShopId = pathname.split('/').pop();

    return (
        <div className={styles.shopsContainer}>
            <h2 className={styles.shopsTitle}>Ресторани</h2>
            <ul className={styles.shopsWrapper}>
                {shops.map((shop) => (
                    <li key={shop._id} className={`${styles.shop} ${currentShopId === shop._id ? styles.active : ''}`}>
                        <Link
                            className={styles.link}
                            href={`/${shop._id}`}
                        >{shop.shopName}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Shops;