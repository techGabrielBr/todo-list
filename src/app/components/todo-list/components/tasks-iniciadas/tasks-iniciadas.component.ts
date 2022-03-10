import { Store } from './../../todo.store';
import { Task } from './../../../../models/task';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private store: Store,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks$ = this.store.getTasks()
      .pipe(
        map((data: Task[]) => {
          return data.filter((data: Task) => {
            return data.iniciada && !data.finalizada;
          })
        })
      )
  }

}
