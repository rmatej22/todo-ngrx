import { createAction, props } from '@ngrx/store';
import { TodoElement } from '../models/todo-element';

export const loadTodos = createAction('[Home Page] Load Todos');

export const addTodo = createAction(
  '[Home Page] Add Todo',
  props<{ todos: TodoElement[] }>()
);

export const removeTodo = createAction(
  '[Home Page] Remove Todo',
  props<{ id: string }>()
);
