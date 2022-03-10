import { Observable } from 'rxjs';
import { Task } from './../../../../models/task';
import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-generic-tasks',
  templateUrl: './generic-tasks.component.html',
  styleUrls: ['./generic-tasks.component.css']
})
export class GenericTasksComponent implements OnInit {
  @Input()
  tasks$!: Observable<Task[]>;

  @Input()
  title!: string;

  body!: Task;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  init(task: Task){
    this.body = task;
    this.body.iniciada = true;

    this.todoService.updateTask(this.body);
  }

  back(task: Task){
    this.body = task;

    if(this.body.finalizada){
      this.body.finalizada = false;
    } else {
      this.body.iniciada = false;
    }

    this.todoService.updateTask(this.body);
  }

  finalize(task: Task){
    this.body = task;
    this.body.finalizada = true;

    this.todoService.updateTask(this.body);
  }

  remove(task: Task){
    this.todoService.deleteTask(task);
  }

}
