import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent implements OnInit {
  private selectedFilter = signal<string>('all');
  // tasks = signal<Task[]>([]);
  private tService = inject(TaskServiceToken);
  // tasks = this.tService.allTasks;
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tService.allTasks().filter(task => task.status === 'OPEN');
      case 'in-progress':
        return this.tService.allTasks().filter(task => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tService.allTasks().filter(task => task.status === 'DONE');
      default:
        return this.tService.allTasks();
    }
  })

  // constructor(private tService: TaskService) { 
  // this.tasks.set(this.tService.tasks());
  // }


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
