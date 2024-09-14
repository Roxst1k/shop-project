import styles from './products.module.css'
import {getProductsFromShopById} from "@/app/services/api";

const Products = async ({shopId, randomImageComponent, buyButton}) => {
    const products = await getProductsFromShopById(shopId)

    return (
        <div className={styles.container}>
            {products.map((product) => (
                <div key={product._id} className={styles.product}>
                    <div className={styles.productImage}>
                        {randomImageComponent}
                    </div>
                    <div className={styles.productDescription}>
                        <h3>{product.productName}</h3>
                        <p className={styles.productPrice}>{product.price} грн</p>
                    </div>
                    {buyButton(product.id, shopId)}
                </div>
            ))}
        </div>
    );
};



export default Products;