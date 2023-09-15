
//Sub types
interface Images {
    url: string;
}
interface Product {
    name: string;
    rating: string;
    images: Images[];
    price: number;
}
export interface Carts {
    id: number;
    product: Product;
    count: number;
}