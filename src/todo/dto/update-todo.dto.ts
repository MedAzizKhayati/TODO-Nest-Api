import { IsEnum, MaxLength, MinLength, ValidationArguments } from "class-validator";
import messages from "../messages/todo.messages";
import { TodoStatusEnum } from "../enums/todo-status.enum";

export class UpdateTodoDto{
    @MinLength(3)
    @MaxLength(10, {
        message: (validationData: ValidationArguments) => messages.long_name(validationData)
    })
    name: string;
    @MinLength(10, {
        message: (validationData: ValidationArguments) => messages.short_description(validationData)
    })
    description: string;
    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;

}