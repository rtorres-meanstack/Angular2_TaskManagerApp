import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../../../shared/models/task';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {
  @Input() task: Task;
  @Output() taskAdded: EventEmitter<number> = new EventEmitter();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickAdd() {
    console.log("Added")
  }  

  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
  }

}
