
export interface IProduct {
    id: number;
    name: string;
    category: string;
    brand: string;
    price: number;
    image: string;
};

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
};