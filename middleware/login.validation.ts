import { NextFunction, Request, Response } from "express";
import { object, string } from "@hapi/joi";




export const loginValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const schema = object().keys({
        username: string().required(),
        password: string().required(),
    });
    try {
        req.body = await schema.validateAsync(req.body);
        next();
    } catch (error: any) {
        console.log(error);
        res.status(400).send(error);
    }
};
