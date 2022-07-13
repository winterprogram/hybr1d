import { Db, MongoClient } from "mongodb";


/**
 * This class is used of mongo connection pool and reuse the active connections
 */
export class MongoService {
    private static cachedDb: Db;

    private static dbo = async () => {
        let client: MongoClient = await MongoClient.connect(
            process.env.MONGO_URL as string
        );
        return client.db();
    }

    public static connectToDb = async () => {
        if (!MongoService.cachedDb) {
            MongoService.cachedDb = await MongoService.dbo();
        }
        return MongoService.cachedDb;
    };

}