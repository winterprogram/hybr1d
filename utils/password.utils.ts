import { hash, compare } from 'bcrypt'

export default class PassUtils {

    /**
     * Encrypt password
     * @param plainText 
     * @returns 
     */
    public static encryptPassword = (plainText: string): Promise<string> => {
        return hash(plainText, process.env.SALT_ROUND!);
    }

    /**
     * Return bool after verifying hash
     * @param plainText 
     * @param salt 
     * @returns 
     */
    public static comparePassword = (plainText: string, salt: string): Promise<boolean> => {
        return compare(plainText, salt);
    }
} 