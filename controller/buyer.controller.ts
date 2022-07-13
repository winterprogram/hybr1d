import { Request, Response } from 'express';
import randomatic from 'randomatic';
import { BuyService } from '../service/buyer.service';
import { ResponseUtils, ResponsewithDataUtils } from '../utils/response.utils';

export class BuyController {

    /**
     * get all sellers
     * @param req 
     * @param res 
     */
    public sellerLists = async (req: Request, res: Response) => {
        try {
            const lists = await BuyService.findAllSellers();
            res.status(200).send(new ResponsewithDataUtils(true, 'Seller Data', { data: lists }));
        } catch (err) {
            console.error(err)
            res.status(500).send(new ResponseUtils(false, 'Internal Server Error!'));
        }
    }
    
    /**
     * Get catalog data by seller id
     * @param req 
     * @param res 
     */
    public sellerCatalog = async (req: Request, res: Response) => {
        try {
            const { seller_id } = req.params;
            const catalogData = await BuyService.getCatalogBySeller(seller_id);
            res.status(200).send(new ResponsewithDataUtils(true, 'Catalog Data', { catalogData }));
        } catch (err) {
            console.error(err)
            res.status(500).send(new ResponseUtils(false, 'Internal Server Error!'));
        }
    }

    /**
     * Buyer Creates buy order
     * @param req 
     * @param res 
     */
    public buyOrder = async (req: Request, res: Response) => {
        try {
            const { seller_id } = req.params,
                orderId = randomatic('0a', 8);
            Object.assign(req.body, { sellerId: seller_id, orderId, createdAt: Date.now() });
            await BuyService.orders(req.body);
            res.status(200).send(new ResponseUtils(true, `Order Created with orderId => ${orderId}`));
        } catch (err) {
            console.error(err)
            res.status(500).send(new ResponseUtils(false, 'Internal Server Error!'));
        }
    }

}