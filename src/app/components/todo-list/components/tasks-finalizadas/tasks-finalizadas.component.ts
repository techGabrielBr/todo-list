import { TodoService } from 'src/app/services/todo.service';
import { Store } from './../../todo.store';
import { Task } from './../../../../models/task';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks$ = this.store.getTasks()
      .pipe(
        map((data: Task[]) => {
          return data.filter((data: Task) => {
            return data.finalizada
          })
        })
      )
  }

}
