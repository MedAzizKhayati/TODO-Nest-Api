import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Req, Request } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import {TodoService } from './service/todo.service';
import { Todo } from "./Model/todo.model";
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todosService: TodoService) {
    }

    @Get('')
    getTodos(): Todo[] {
        return this.todosService.findAll();
    }

    @Post('')
    createTodos(
        @Body() todo: AddTodoDto
    ): Todo {
        return this.todosService.create(todo);
    }

    @Get('/:id')
    get(
        @Param('id') id: string
    ): Todo {
        return this.todosService.getById(id);
    }
    @Delete('/:id')
    delete(
        @Param('id') id: string
    ): string {
        return this.todosService.delete(id);
    }

    @Put('/:id')
    update(
        @Param('id') id: string,
        @Body() newTodo: UpdateTodoDto
    ): Todo {
        return this.todosService.patch(newTodo, id);
    }
    @Patch('/:id')
    patch(
        @Param('id') id: string,
        @Body() newTodo: UpdateTodoDto
    ): Todo {
        return this.todosService.patch(newTodo, id);
    }


}

