import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter();
  todo: Todo = new Todo();
  constructor() { }

  ngOnInit() {
  }

  onSaveClick() {
    this.saveTodo.emit(this.todo);
    this.todo=new Todo();
  }
}
