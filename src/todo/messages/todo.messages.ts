import { ValidationArguments } from "class-validator";

const messages = {
    'short_description' : (validationData: ValidationArguments) => 
    `The length of your ${validationData.property} ${validationData.value} is short, the minimal length of ${validationData.property} is ${validationData.constraints[0]}`,
    'long_name' : (validationData: ValidationArguments) => 
    `The length of your ${validationData.property} ${validationData.value} is long, the maximum length of ${validationData.property} is ${validationData.constraints[0]}`,
}

export default messages;