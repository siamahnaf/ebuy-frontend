
//Sub Types
interface Image {
    url: string;
}
export interface Products {
    name: string;
    image: Image[];
    description?: string;
    ratting: string;
    price: string;
    originalPrice: string;
}