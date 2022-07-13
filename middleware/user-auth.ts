import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw Error("INVALID_TOKEN");
    }
    const tokenUsefulPart = token.replace("Bearer ", ""),
      decodeToken: any = verify(tokenUsefulPart, process.env.JWT_KEY!),
      { email, user_id } = decodeToken;
    Object.assign(req.body, { email, user_id });
    console.log(decodeToken);
    next();
  } catch (error: any) {
    console.log(error);
    res.status(401).send({ message: "Authentication Error" });
  }
};
