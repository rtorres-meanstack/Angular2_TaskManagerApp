import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskDisplayComponent } from './components/task-display/task-display.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
// import { TasksService } from './services/tasks.service'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TaskManagerComponent, TaskDisplayComponent, TaskAddComponent],
  exports: [TaskManagerComponent]
})
export class TasksModule { }
