import { ICatalog } from "../types/interface";
import { MongoService } from "./mongoPool.service";



export class SellerService {
    /**
     * 
     * @param obj 
     * Insert catalog data to mongodb
     */
    public static insertOne = async (obj: ICatalog): Promise<void> => {
        await (await MongoService.connectToDb()).collection('catalogs').insertOne(obj);
    }

    /**
     * Get orders
     * @param sellerId 
     * @returns 
     */
    public static findOrders = async (sellerId: string): Promise<any> => {
        return (await MongoService.connectToDb()).collection('orders').find({ sellerId }).toArray();
    }


}