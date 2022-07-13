import { UserType } from "../types/enums";
import { IOrder } from "../types/interface";
import { MongoService } from "./mongoPool.service";



export class BuyService {
    /**
     * Return list of sellers
     * @returns 
     */
    public static findAllSellers = async (): Promise<any> => {
        return (await MongoService.connectToDb()).collection('users').find({ userType: UserType.SELLER, isActive: true }).toArray();
    }

    /**
     * Catalog Data
     * @param user_id 
     * @returns 
     */
    public static getCatalogBySeller = async (user_id: string): Promise<any> => {
        return (await MongoService.connectToDb()).collection('catalogs').findOne({ user_id });
    }

    /**
     * Buyer Creates an order
     * @param obj 
     */
    public static orders = async (obj: IOrder): Promise<void> => {
        await (await MongoService.connectToDb()).collection('orders').insertOne(obj);
    }

}