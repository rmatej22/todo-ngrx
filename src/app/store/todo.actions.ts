import { createAction, props } from '@ngrx/store';
import { TodoElement } from '../models/todo-element';

export const loadTodos = createAction('[Home Page] Load Todos');

export const addTodo = createAction(
  '[Home Page] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Home Page] Remove Todo',
  props<{ id: string }>()
);

export const loadTodosSuccess = createAction(
  '[Home Page] Load Todos Successfully',
  props<{ todos: TodoElement[] }>()
);

export const loadTodosFail = createAction(
  '[Home Page] Load Todos Fail',
  props<{ error: string }>()
);
