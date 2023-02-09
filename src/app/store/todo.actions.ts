import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[Home Page] Load Todos');

export const addTodo = createAction(
  '[Home Page] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Home Page] Remove Todo',
  props<{ id: string }>()
);
