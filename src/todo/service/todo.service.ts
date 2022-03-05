import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from '../dto/add-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../Model/todo.model';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  constructor() {
    this.todos = [new Todo('1', 'Sport', 'faire du sport')];
  }

  create(data: AddTodoDto) {
    let todo = new Todo();
    todo = { ...todo, ...data };
    this.todos.push(todo);
    return todo;
  }

  getById(id: string) {
    let todo = this.todos.find(todo => todo.id === id);
    if (todo)
      return todo;
    throw new NotFoundException(`The wanted todo doesn't exist`);
  }

  update(newTodo: AddTodoDto, id: string) {
    let todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      for (let property in newTodo)
        (todo[property]) ? todo[property] = newTodo[property] : null;
      return todo;
    }
    throw new NotFoundException(`The wanted todo doesn't exist`);
  }
  patch(newTodo: UpdateTodoDto, id: string) {
    let todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      for (let property in newTodo)
        (todo[property]) ? todo[property] = newTodo[property] : null;
      return todo;
    }
    throw new NotFoundException(`The wanted todo doesn't exist`);
  }

  delete(id: string) {
    let todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex);
      return "The todo was deleted.";
    }
    throw new NotFoundException(`The wanted todo doesn't exist`);
  }

  findAll(): Todo[] {
    return this.todos;
  }
}