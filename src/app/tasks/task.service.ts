import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Task[]>([]);

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
  }

}