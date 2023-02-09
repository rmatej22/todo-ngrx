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
  error: '',
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
  })
);
