import { Injectable } from '@angular/core';

import { Task } from '../../../shared/models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[];
  constructor() { }

  getTasks = (): Observable<Task[]> => {
    return of(this.tasks);
  }
}
