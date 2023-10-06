import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '../components/todo-list/todo.store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = environment.API_TODO_URL

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url).pipe(
      tap((data) => this.store.set('tasks', data))
    )
  }

  createTask(task: Task){
    this.http.post<Task>(this.url, task).subscribe((response: Task) => {
      const value = this.store.value.tasks;
      value[value.length++] = response;

      this.store.set('tasks', value);
    })
  }

  updateTask(data: Task){
    this.http.put<Task>(`${this.url}/${data.id}`, data).subscribe(() => {
      const value = this.store.value.tasks;

      const tasks = value.map((task: Task) => {
        if (task.id == data.id) {
          return { ...task, ...data };
        } else {
          return task;
        }
      });

      this.store.set('tasks', tasks);
    })
  };

  deleteTask(data: Task){
    this.http.delete<Task>(`${this.url}/${data.id}`).subscribe(() => {
      const value = this.store.value.tasks;
      const tasks = value.filter(t => t.id != data.id);

      this.store.set('tasks', tasks);
    })
  }
}
