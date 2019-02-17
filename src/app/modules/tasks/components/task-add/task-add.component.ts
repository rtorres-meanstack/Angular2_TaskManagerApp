import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../shared/models/task'

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  task: Task = new Task();

  constructor() { }

  ngOnInit() {
  }

  addTask(){
    console.log('Submit Successful: ', this.task);
  }

}
