import Products from "@/app/components/products/products";
import RandomImage from "@/app/components/randomImage/randomImage";
import Button from "@/app/components/button/button";


export default function Page({params}) {
    const {shopId} = params;

    return (
        <Products
            shopId={shopId}
            randomImageComponent={<RandomImage/>}
            buyButton = {(productId, shopId) => <Button productId={productId} shopId={shopId} />}
        />
    )
}