import { NextFunction, Request, Response } from "express";
import { array, number, object, string } from "@hapi/joi";



export const buyOrderValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const schema = object().keys({
        user_id: string().required(),
        productList: array().items(object().keys({
            name: string().required(),
            price: number().required(),
        }))
    });
    try {
        req.body = await schema.validateAsync(req.body);
        next();
    } catch (error: any) {
        console.log(error);
        res.status(400).send(error);
    }
};
