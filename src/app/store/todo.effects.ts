import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { TodoService } from '../services/todo.service';
import * as TodoActions from '../store/todo.actions';
import { selectTodoElements } from './todo.selector';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store
  ) {}

  // effect for load todos action
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() => {
        return from(this.todoService.getTodos()).pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos: todos })),
          catchError((error) => of(TodoActions.loadTodosFail({ error: error })))
        );
      })
    );
  });

  // effect that triggers when add todo or remove todo action is dispached
  saveTodo$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(TodoActions.addTodo, TodoActions.removeTodo),
        concatLatestFrom(() => this.store.select(selectTodoElements)),
        switchMap(([action, todos]) => {
          return from(this.todoService.saveTodos(todos));
        })
      );
    },
    { dispatch: false }
  );
}
