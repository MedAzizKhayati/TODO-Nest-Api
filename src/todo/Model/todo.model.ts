import { TodoStatusEnum } from "../enums/todo-status.enum";
import { v4 as uuidv4 } from 'uuid';

export class Todo {
    constructor(
        public id: string =  uuidv4(),
        public name: string = 'Todo',
        public description: string = '',
        public createAt: Date = new Date(),
        public status: TodoStatusEnum = TodoStatusEnum.waiting,
    ) {}
}