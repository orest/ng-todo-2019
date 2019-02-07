import { Component } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoSerivceService } from './todo-serivce.service';
import { TodoLocalFileService } from './todo-local-file.service';
import { TodoStaticService } from './todo-static.service';

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

    operator: string
    price = 345345.455
    sales = 0.34

    todos: Todo[];

    constructor(private todoSerivce: TodoStaticService) {

    }
    ngOnInit() {
        //this.filteredTodos = this.todos.slice(0)
        this.todos = this.todoSerivce.getAllTodos();
        this.onFilterChange();

        // this.todoSerivce.getAllTodos().subscribe(data => {
        //     this.todos = data;
        //     this.onFilterChange()
        // })

        this.todo = new Todo();

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
        let index = this.todos.findIndex(p => p.id == todo.id);

        this.todos.splice(index, 1);
        this.onFilterChange();
    }

    parentSaveTodo(todo) {
        console.log("parentSaveTodo")

        this.todos.push(todo);
        this.onFilterChange();
    }
} 