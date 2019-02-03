import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <todo-list></todo-list>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Hello world!!!!';
}
