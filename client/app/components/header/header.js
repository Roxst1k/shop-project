'use client'

import React from 'react';
import Link from "next/link";
import styles from "./header.module.css";
import {usePathname} from "next/navigation";


const Header = () => {
    const pathname = usePathname()


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
                        <Link href={'/card'}>Мої покупки 🛒</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;