import { IsNotEmpty, MaxLength, MinLength, ValidationArguments } from "class-validator";

export class AddTodoDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name: string;
    @IsNotEmpty()
    @MinLength(10, {
        message: (validationData: ValidationArguments) => {
            return `The length of your ${validationData.property} ${validationData.value} is short,\
the minimal length of ${validationData.property} is ${validationData.constraints[0]}`
        }
    })
    description: string;
}