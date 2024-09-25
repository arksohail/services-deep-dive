import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

// @Injectable({
//   providedIn: 'root'
// })
export class TaskService {
  private tasks = signal<Task[]>([]);

  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string, description: string }) {
    const newtask: Task = {
      ...taskData,
      id: new Date().getTime().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTask) => {
      return [...oldTask, newtask];
    });
    console.log(this.tasks());
    this.loggingService.log('ADDED A NEW TASK WITH TITLE ' + taskData.title);
  }
  
  updateTaskStatus(id: string, status: TaskStatus) {
    this.tasks.update((oldTask)=> {
      return oldTask.map((task)=> {
        if(task.id === id) {
          return {
            ...task, 
            status: status
          }
        } else return task;
      })
    });
    this.loggingService.log('CHANGE TASK STATUS TO ' + status);
  }



}