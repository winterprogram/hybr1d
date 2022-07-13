import { NextFunction, Request, Response } from "express";
import {  boolean, object, string } from "@hapi/joi";
import { UserType } from "../types/enums";



export const userValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const schema = object().keys({
        username: string().required(),
        password: string().required(),
        userType: string().required().valid(UserType.BUYER, UserType.SELLER),
        isActive: boolean().default(true)
    });
    try {
        req.body = await schema.validateAsync(req.body);
        next();
    } catch (error: any) {
        console.log(error);
        res.status(400).send(error);
    }
};
