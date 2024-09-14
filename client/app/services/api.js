import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";

// Shop
export const getAllShops = async () => {
    noStore()
    try {
        const response = await fetch('http://localhost:5000', {
            cache: 'no-cache',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to fetch (shops):', err);
        return null;
    }
};

export const getShopById = async (shopId) => {
    try {
        const response = await fetch(`http://localhost:5000/shop/${shopId}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to fetch shop:', err);
        return null;
    }
}

export const getProductsFromShopById = async (shopId) => {
    noStore()
    try {
        const response = await fetch(`http://localhost:5000/shop/${shopId}/products`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to fetch shop:', err);
        return null;
    }
}

export const getProductByShopIdAndProductId = async (shopId, productId) => {
    // console.log(productId)
    try {
        const response = await fetch(`http://localhost:5000/shop/${shopId}/${productId}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to fetch shop:', err);
        return null;
    }
}

export const addChangeToProduct = async (shopId, productId, isAdded) => {
    console.log('isAdded in api:' + isAdded)

    try {
        const response = await fetch(`http://localhost:5000/shop/${shopId}/${productId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({isAdded})
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error('Failed to add change:', err);
        return null;
    }
}

// Card

export const getCard = async () => {
    try {
        const response = await fetch('http://localhost:5000/card', {
            cache: 'no-cache',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to fetch card:', err);
        return null;
    }
}

export const addProductToCard = async (name, shopId, price) => {
    try {
        const response = await fetch('http://localhost:5000/card/66e46fae871a16b5f7b756dc', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, shopId, price}),
            cache: 'no-cache',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to fetch card prod:', err);
        return null;
    }
}

export const deleteProductFromCard = async (productId) => {
    try {
        const response = await fetch(`http://localhost:5000/card/66e46fae871a16b5f7b756dc/product/${productId}`, {
            method: 'Delete'
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (err) {
        console.error('Failed to delete product:', err);
    }
}