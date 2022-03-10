import { Task } from './../../models/task';
import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTask: Task = {
    titulo: '',
    iniciada: false,
    finalizada: false,
  }

  taskTitle!: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  create(){
    this.newTask.titulo = this.taskTitle;
    this.todoService.createTask(this.newTask);
    this.taskTitle = '';
  }

}
