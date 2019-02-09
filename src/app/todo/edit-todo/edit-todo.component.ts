import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todoId
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params["id"];

  }

}
