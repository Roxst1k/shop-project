export const getAllShops = async () => {
    try {
        const response = await fetch('http://localhost:5000'); // Changed to HTTP
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
