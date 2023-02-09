import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoElement } from '../models/todo-element';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todo: string = '';
  allTodos$: Observable<TodoElement[]> | undefined;

  constructor() {}
}
