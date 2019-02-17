import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];

  constructor(private http: HttpClient) { }

  getTasks(){
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks', this.tasks);
    });
  }
  addTasks(){}
  ngOnInit() {
    this.getTasks();
  }
  onTaskDeleted(taskId){
    let taskIndex = 0;
    for(let task of this.tasks){
      if(task.id === taskId){
        this.tasks.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }

}
