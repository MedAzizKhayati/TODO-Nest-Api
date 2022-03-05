import { NestMiddleware } from "@nestjs/common";

export class FirstMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void){
        console.log(req);
        next();
    }
}