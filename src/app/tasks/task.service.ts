import { inject } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

export class TaskService {
  private tasks: Task[] = [];

  get allTasks() {
    return [...this.tasks];
  }

  private loggingService = inject(LoggingService);

  addTask(taskData: { title: string, description: string }) {
    const newtask: Task = {
      ...taskData,
      id: new Date().getTime().toString(),
      status: 'OPEN'
    }
    this.tasks = [...this.tasks, newtask];
    this.loggingService.log('ADDED A NEW TASK WITH TITLE ' + taskData.title);
    console.log(this.tasks);
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.status = status;
      }
    });
    this.loggingService.log('CHANGE TASK STATUS TO ' + status);
    console.log(this.tasks);
  }
}