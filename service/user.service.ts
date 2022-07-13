import { IUserObj } from "../types/interface";
import { MongoService } from "./mongoPool.service";



export class UserService {
    /**
     * 
     * @param obj 
     * Insert user data to mongodb
     */
    public static insertOne = async (obj: IUserObj): Promise<void> => {
        await (await MongoService.connectToDb()).collection('users').insertOne(obj);
    }

    /**
     * Get user by email
     * @param email 
     * @returns 
     */
    public static findOnebyEmail = async (email: string) => {
        return (await MongoService.connectToDb()).collection('users').findOne({ email });
    }


}