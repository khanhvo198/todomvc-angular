import { Component } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { Filter, FilterButton } from 'src/app/models/filtering.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  filterButtons: FilterButton[] = [
    {type: Filter.All, label: 'All', isActive: true},
    {type: Filter.Active, label: 'Active', isActive: false},
    {type: Filter.Completed, label: 'Completed', isActive: false},

  ]
  length = 0;
  hasComplete$: Observable<boolean>;
  destroy$: Subject<null> = new Subject<null>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.length$.pipe(takeUntil(this.destroy$)).subscribe((length) => {this.length = length})
    this.hasComplete$ = this.todoService.todos$.pipe(
      map(todos => todos.some(t => t.isCompleted)),
      takeUntil(this.destroy$)
    )    
  }


  clearCompleted() {
    this.todoService.clearCompleted();
  }
  filter(type: Filter) {this.setActiveButton(type);
    this.todoService.filterTodos(type, true);
  }

  private setActiveButton(type: Filter) {
    this.filterButtons.forEach((btn) => {
      btn.isActive = btn.type === type
    })
  }




  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }






}
