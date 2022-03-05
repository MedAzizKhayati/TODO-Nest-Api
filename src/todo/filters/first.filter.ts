import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import {Request, Response} from 'express';

@Catch(HttpException)
export class FirstFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const exceptionResponse = exception.getResponse();
        try {
            exceptionResponse.message = exceptionResponse.message.map( msg => "The error message is: " + msg );
        } catch (error) {
            
        }
        exceptionResponse.timeStamp = new Date().toISOString();
        response
            .status(exception.getStatus())
            .json(
                exceptionResponse
            )
        return response;
    }
}
