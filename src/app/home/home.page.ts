import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoElement } from '../models/todo-element';
import { selectTodoElements } from '../store/todo.selector';
import * as TodoActions from '../store/todo.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todo: string = '';
  allTodos$: Observable<TodoElement[]> = this.store.select(selectTodoElements);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo() {
    this.store.dispatch(TodoActions.addTodo({ content: this.todo }));
    this.todo = '';
  }

  deleteTodo(id: string) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}
