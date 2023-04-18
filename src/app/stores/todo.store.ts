import { Injectable, inject } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  OnStoreInit,
} from '@ngrx/component-store';
import { Todo } from '../models/todo.model';
import { exhaustMap, pipe } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoStore
  extends ComponentStore<{ todos: Todo[] }>
  implements OnStateInit
{
  private readonly TodoStorageKey = 'todos';

  private readonly storageService = inject(LocalStorageService);

  readonly todos$ = this.select(s => s.todos, { debounce: true });

  ngrxOnStateInit() {
    const todos = this.storageService.getValue<Todo[]>(this.TodoStorageKey)!;
    this.patchState({ todos });
  }

  readonly addTodo = this.updater<string>((state, content) => {
    const date = new Date(Date.now()).getTime();
    const newTodo = new Todo(date, content);
    return {
      todos: [newTodo, ...state.todos],
    };
  });
}
