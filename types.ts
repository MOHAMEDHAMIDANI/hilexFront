// types.ts

export type UserType = {
    id: string;
    firstName: string;
    familyName: string;
    phoneNumber: string;
    address: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
};

export type CategoryType = {
    id: string;
    categoryName: string;
    product: ProductType[];
};

export type ProductType = {
    id: string;
    productName: string;
    price: number;
    image: string[];
    size: string[];
    color: string[];
    description: string;
    stock: number;
    category: CategoryType;
    quantity: number ;
};

export type OrderType = {
    id: string;
    productId: string;
    familyName: string;
    firstName: string;
    phoneNumber: string;
    quantity: number;
    totalPrice: number;
    address: string;
    isConfirmed: boolean;
    isDelivered: boolean;
    createdAt: Date;
    updatedAt: Date;
};
