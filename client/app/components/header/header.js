'use client'

import React from 'react';
import Link from "next/link";
import styles from "./header.module.css";
import {usePathname} from "next/navigation";
import {useMyContext} from "@/app/services/context";


const Header = () => {
    const pathname = usePathname()
    const {state, dispatch} = useMyContext()


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
                            {state.products.length > 0 ? (
                                <span
                                    className={styles.count}
                                >
                                {state.products.length > 9 ? '9+' : `${state.products.length}`}
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