import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { TaskManagerComponent } from './modules/tasks/task-manager/task-manager.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskManagerComponent
  }
];

@NgModule({
  imports: [
        CommonModule,
        RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}