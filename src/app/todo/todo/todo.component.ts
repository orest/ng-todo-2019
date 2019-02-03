import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo
  @Output() todoDeleted = new EventEmitter()

  state: string = 'display'

  constructor() { }

  ngOnInit() {
    this.state = 'display'
  }

  switchState(newState) {
    this.state = newState;
  }

  cancel() {
    this.state = 'display'
  }

  save() {
    //todo save
    this.state = 'display'
  }


  delete() {
    //TODO delete
    this.todoDeleted.emit(this.todo);
    this.state = 'display'
  }
}
