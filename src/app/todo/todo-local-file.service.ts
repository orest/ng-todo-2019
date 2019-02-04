import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { Todo } from '../models/Todo';

@Injectable({
    providedIn: 'root'
})
export class TodoLocalFileService {

    constructor(private httpClient: HttpClient) { 
        
    }
    getAllTodos(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>("../assets/data/todos.json").pipe(
            tap(data => console.log(data)),
        )
    }
}
