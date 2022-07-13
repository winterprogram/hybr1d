import { Request, Response } from 'express';
import randomatic from 'randomatic';
import { SellerService } from '../service/seller.service';
import { ResponseUtils, ResponsewithDataUtils } from '../utils/response.utils';

export class SellerController {

    /**
     * Register Catalog function
     * @param req 
     * @param res 
     */
    public catalogs = async (req: Request, res: Response) => {
        try {
            const catalogId = randomatic('0a', 5),
                { user_id } = req.body;
            Object.assign(req.body, { createdAt: Date.now(), catalogId });
            await SellerService.insertOne(req.body);
            res.status(200).send(new ResponseUtils(true, `Catalog Register for ${user_id}`))
        } catch (err) {
            console.error(err)
            res.status(500).send(new ResponseUtils(false, 'Internal Server Error!'));
        }
    }

    /**
     * Order List for placed order
     * @param req 
     * @param res 
     */

    public ordersPlaced = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.body;
            const orderList = await SellerService.findOrders(user_id);
            res.status(200).send(new ResponsewithDataUtils(true, `Order Data`, { data: orderList }));
        } catch (err) {
            console.error(err)
            res.status(500).send(new ResponseUtils(false, 'Internal Server Error!'));
        }
    }


}