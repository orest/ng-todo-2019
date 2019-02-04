import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
    providedIn: 'root'
})
export class TodoSerivceService {

    constructor() { }

    getAllTodos() {
        return this.todos;        
    }

    todos: Todo[] =
        [
            {
                "id": 1,
                "title": "Learn WebAPI C",
                "isCompleted": true,
                "dueDate": new Date("2019-01-14T00:00:00"),
                "minutesSpent": 180,
                "priority": 1
            },
            {
                "id": 2,
                "title": "Learn WebAPI POST. With Update",
                "isCompleted": false,
                "dueDate": new Date("2019-01-14T00:00:00"),
                "minutesSpent": 180,
                "priority": 1
            },
            {
                "id": 3,
                "title": "Learn Testing",
                "isCompleted": false,
                "dueDate": new Date("2019-01-14T00:00:00"),
                "minutesSpent": 10,
                "priority": 2
            },
            {
                "id": 4,
                "title": "Learn Testing",
                "isCompleted": false,
                "dueDate": new Date("2019-01-14T00:00:00"),
                "minutesSpent": 10,
                "priority": 2
            },
            {
                "id": 12,
                "title": "yo",
                "isCompleted": false,
                "dueDate": new Date("2019-01-14T00:00:00"),
                "priority": 0,
                "minutesSpent": 0,
            }
        ]
}
