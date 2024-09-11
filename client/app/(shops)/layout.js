import Shops from "@/app/components/shops/shops";
import styles from './shopsPage.module.css'

export default function ShopLayout({children}) {
    return (
        <div className={styles.container}>
            <Shops/>
            {children}
        </div>
    );
}
