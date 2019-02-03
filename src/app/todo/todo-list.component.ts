import { Component } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.css"]
})
export class TodoListComponent {
  message: string = "Hello From our first componenet"
  counter: number = 0;
  pageState = 'active'
  filter = ''
  filteredTodos = []
  todo: Todo;
  input1: number = null;
  input2: number = 0;
  result: number = 0;
  operator: string

  price = 345345.455
  sales = 0.34

  constructor() {

  }
  ngOnInit() {
    //this.filteredTodos = this.todos.slice(0)
    this.onFilterChange()
    this.todo = new Todo();
    this.todo = {
      id: 2,
      title: "Learn WebAPI POST. With Update",
      isCompleted: true,
      dueDate: new Date(),
      minutesSpent: 180,
      priority: 1
    }
  }

  addNumbers() {
    this.result = Number(this.input1) + Number(this.input2)
  }
  addToCounter() {
    this.counter += 1;
  }

  calculate() {
    if (this.operator === "+") {
      this.addNumbers()
    } else if (this.operator === "-") {
      this.result = Number(this.input1) - Number(this.input2)
    }
  }
  showAll() {
    this.pageState = 'all'
    this.onFilterChange();
  }

  showActive() {
    this.pageState = 'active'
    this.onFilterChange();
  }

  fullFilter() {
    return this.filter + "!!!!"
  }


  // this.todo = {
  //   id: 2,
  //   title: "Learn WebAPI POST. With Update",
  //   isCompleted: true,
  //   dueDate: "2019-01-14T00:00:00",
  //   minutesSpent: 180,
  //   priority: 1
  // }
  getTitle() {
    return this.message + "!!!!";
  }


  private _todoFilter: string = "";
  public get todoFilter(): string {
    return this._todoFilter;
  }
  public set todoFilter(value: string) {
    this._todoFilter = value;
    console.log(value)
    this.onFilterChange()
    // this.filteredTodos = this.todoFilter ? this.filterTodos(this.todoFilter) : this.todos;
  }

  onFilterChange() {
    this.filteredTodos = [];
    const f = this.filter.toLowerCase();

    for (const todo of this.todos) {
      if (todo.title.toLowerCase().indexOf(f) >= 0) {
        if (this.pageState === 'all' || (this.pageState === 'active' && !todo.isCompleted)) {
          this.filteredTodos.push(todo)
        }
      }
    }
  }

  filterTodos(filter: string) {
    filter = filter.toLowerCase();
    return this.todos.filter(p => p.title.toLowerCase().indexOf(filter) > -1);
  }

  onTodoDeleted(todo) {
    console.log(todo)
  }

  todos =
    [
      {
        "id": 1,
        "title": "Learn WebAPI C",
        "isCompleted": true,
        "dueDate": "2019-01-14T00:00:00",
        "minutesSpent": 180,
        "priority": 1
      },
      {
        "id": 2,
        "title": "Learn WebAPI POST. With Update",
        "isCompleted": false,
        "dueDate": "2019-01-14T00:00:00",
        "minutesSpent": 180,
        "priority": 1
      },
      {
        "id": 3,
        "title": "Learn Testing",
        "isCompleted": false,
        "dueDate": "2019-01-14T22:24:21.787",
        "minutesSpent": 10,
        "priority": 2
      },
      {
        "id": 4,
        "title": "Learn Testing",
        "isCompleted": false,
        "dueDate": "2019-01-14T22:29:42.44",
        "minutesSpent": 10,
        "priority": 2
      },
      {
        "id": 12,
        "title": "yo",
        "isCompleted": false,
        "dueDate": "2019-01-16T21:45:10.48",
        "priority": 0
      },
      {
        "id": 13,
        "title": "test 1",
        "isCompleted": false,
        "dueDate": "2019-01-21T22:04:58.857",
        "priority": 1
      },
      {
        "id": 14,
        "title": "test 2",
        "isCompleted": false,
        "dueDate": "2019-01-21T22:05:47.187",
        "priority": 1
      }
    ]
} 