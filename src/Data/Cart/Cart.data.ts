import Product1 from "Assets/cart/cart-1.png";
import Product2 from "Assets/cart/cart-2.png";
import Product3 from "Assets/cart/cart-3.png";

export default [
    {
        id: 1,
        product: {
            name: "MYFORD by Pantaloons New T-Shirt",
            rating: "3",
            images: [
                { url: Product1 },
                { url: Product2 },
            ],
            price: 45
        },
        count: 3
    },
    {
        id: 2,
        product: {
            name: "BYFORD by Pantaloons New T-Shirt",
            rating: "3",
            images: [
                { url: Product2 },
                { url: Product1 },
            ],
            price: 45
        },
        count: 2
    },
    {
        id: 3,
        product: {
            name: "CYFORD by Pantaloons New T-Shirt",
            rating: "3",
            images: [
                { url: Product3 },
                { url: Product2 },
            ],
            price: 45
        },
        count: 1
    }
]