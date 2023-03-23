import { animate, state, style, transition, trigger } from '@angular/animations';
import { isNgContainer } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

const fadeStrikeThroughAnimations = trigger('fadeStrikeThrough', [
  state('active', style({
    fontSize: '18px',
    color: 'black'
  })),
  state('completed', style({
    fontSize: '17px',
    color: 'lightgrey',
    textDecoration: 'line-through'
  })),
  transition('active <=> completed', [animate(250)])
])



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [fadeStrikeThroughAnimations]
})
export class TodoItemComponent {
  isHovered = false;
  isEditing = false;

  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
  constructor() {};


  changeTodoStatus() {
    this.changeStatus.emit({...this.todo, isCompleted: !this.todo.isCompleted})
  }
  removeTodo() {
    this.deleteTodo.emit(this.todo.id);
  }
  submitEdit(event: KeyboardEvent) {
    const { code } = event;
    event.preventDefault();
    if(code === 'Enter') {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }

     
  }

}
