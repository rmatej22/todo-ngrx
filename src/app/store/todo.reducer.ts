import { createReducer, on } from '@ngrx/store';
import { TodoElement } from '../models/todo-element';
import * as TodoActions from '../store/todo.actions';

export interface TodoState {
  todos: TodoElement[];
  error: string;
  status: string;
}

export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  // on load todos
  on(TodoActions.loadTodos, (state): TodoState => {
    return {
      ...state,
      status: 'loading',
    };
  }),
  // on add todo
  on(TodoActions.addTodo, (state, action): TodoState => {
    return {
      ...state,
      todos: [
        ...state.todos,
        { id: Date.now().toString(), content: action.content },
      ],
    };
  }),
  // on remove todo
  on(TodoActions.removeTodo, (state, action): TodoState => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id != action.id),
    };
  }),
  // on load todo success
  on(TodoActions.loadTodosSuccess, (state, action): TodoState => {
    return {
      ...state,
      todos: action.todos,
      error: null,
      status: 'success',
    };
  }),
  // on load todo fail
  on(TodoActions.loadTodosFail, (state, action): TodoState => {
    return {
      ...state,
      error: action.error,
      status: 'error',
    };
  })
);
