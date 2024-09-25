import { Component, inject } from '@angular/core';

import { TASK_STATUS_OPTION } from '../task.model';
import { TaskServiceToken } from '../../app.module';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  selectedFilter = "all";
  private tService = inject(TaskServiceToken);
  taskStatusOption = inject(TASK_STATUS_OPTION);

  get tasks() {
    switch (this.selectedFilter) {
      case 'open':
        return this.tService.allTasks.filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.tService.allTasks.filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tService.allTasks.filter(task => task.status === 'DONE');
      default:
        return this.tService.allTasks;
    }
  }

  constructor() { }


  onChangeTasksFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
