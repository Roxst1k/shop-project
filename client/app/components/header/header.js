'use client'

import React, {useEffect} from 'react';
import Link from "next/link";
import styles from "./header.module.css";
import {usePathname} from "next/navigation";
import useSWR from "swr";
import {getCard} from "@/app/services/api";


const Header = () => {
    const pathname = usePathname()
    const { data: card, mutate} = useSWR('http://localhost:5000/card', getCard)

    const totalProducts = card?.[0]?.products.reduce((acc, item) => {
       return acc + +item.quantity
    },0)

    // useEffect(() => {
    //     mutate()
    // }, [card?.[0]?.products])


    return (
        <div className={styles.wrapper}>
            <nav>
                <ul className={styles.navigationList}>
                    <li
                        className={`${styles.navigationItem} ${pathname !== '/card' ? styles.navigationActive : ''}`}
                    >
                        <Link href={'/'}>Ресторани 🍟</Link>
                    </li>
                    <li
                        className={`${styles.navigationItem} ${pathname === '/card' ? styles.navigationActive : ''}`}
                    >
                        <Link href={'/card'} className={styles.cardLink}>
                            Мої покупки 🛒
                            {card?.[0]?.products.length > 0 ? (
                                <span
                                    className={styles.count}
                                >
                                {card?.[0]?.products.length > 9 ? '9+' : `${totalProducts}`}
                            </span>
                            ) : null}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;