import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TodoStore } from './stores/todo.store';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [TodoStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
