import { Component, inject } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoStore } from 'src/app/stores/todo.store';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent {
  todoContent: string = '';

  readonly todoStore = inject(TodoStore);

  constructor() {}

  onSubmit() {
    if (this.todoContent.trim() === '') {
      return;
    }

    this.todoStore.addTodo(this.todoContent);

    this.todoContent = '';
  }
}
