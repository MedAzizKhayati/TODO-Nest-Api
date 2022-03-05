import { Request, Response } from "express";

export function logger(req: Request, res: Response, next: () => void): void {
    console.log("The ip address of the user: " + req.ip);
    console.log("The body is: \n", req.body);  
    next();
}