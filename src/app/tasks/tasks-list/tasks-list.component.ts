import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent implements OnInit {
  selectedFilter = signal<string>('all');
  // tasks = signal<Task[]>([]);
  private tService = inject(TaskService);
  tasks = this.tService.allTasks;

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
