import { Store } from './components/todo-list/todo.store';
import { TasksIniciadasComponent } from './components/todo-list/components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/todo-list/components/tasks-finalizadas/tasks-finalizadas.component';
import { GenericTasksComponent } from './components/todo-list/components/generic-tasks/generic-tasks.component';
import { TasksComponent } from './components/todo-list/components/tasks/tasks.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingComponent } from './components/todo-list/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    TasksComponent,
    GenericTasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Store,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
