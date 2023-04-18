import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { TodoStore } from 'src/app/stores/todo.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos$;
  readonly todoStore = inject(TodoStore);
  constructor() {}

  ngOnInit() {}

  onChangeTodoStatus(todo: Todo) {
    this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
  }

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
  onEditTodo(todo: Todo) {
    this.todoService.editTodo(todo.id, todo.content);
  }
}
