import { UserType } from "./enums";

export interface IUserObj {
    user_id: string;
    userType: UserType;
    createdAt: number;
    isActive: boolean;
    username: string;
    password: string
}


interface IProducts {
    name: string;
    price: number;
}

export interface ICatalog {
    user_id: string;
    catalogId: string;
    productList: IProducts[];
    catalogName: string;
}


export interface IOrder {
    user_id: string;
    sellerId: string;
    productList: IProducts[];
    orderId: string;
    createdAt: number;
}