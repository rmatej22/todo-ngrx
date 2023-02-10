import { Injectable } from '@angular/core';
import { TodoElement } from '../models/todo-element';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageInitialised = false;

  constructor(private storage: Storage) {}

  async getTodos(): Promise<TodoElement[]> {
    if (!this.storageInitialised) await this.storage.create();

    return (await this.storage.get('todos')) || [];
  }

  async saveTodos(todos: TodoElement[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('todos', todos);
  }
}
