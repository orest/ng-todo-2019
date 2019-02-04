import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from './todo/todo-list.component';

const routes: Routes = [];
// const routes: Routes = [
// 	{ path: "home", component: LoginComponent },
// 	{ path: "todos", component: TodoListComponent },
// 	{ path: "", component: LoginComponent, pathMatch: 'full' },
// 	{ path: "**", component: PageNotFoundComponent }
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
