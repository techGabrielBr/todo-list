import { Store } from './../../todo.store';
import { Task } from './../../../../models/task';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private store: Store,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.tasks$ = this.store.getTasks()
      .pipe(
        map((data: Task[]) => {
          return data.filter((data: Task) => {
            return !data.iniciada;
          })
        })
      )

    this.todoService.getTasks().subscribe();
  }

}
