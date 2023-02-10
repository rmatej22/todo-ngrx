import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { TodoService } from '../services/todo.service';
import * as TodoActions from '../store/todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

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
}
