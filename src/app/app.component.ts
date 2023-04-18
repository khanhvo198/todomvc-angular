import { Component } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-mvc';

  hasTodo$: Observable<boolean> = of(false);

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
  }
}
