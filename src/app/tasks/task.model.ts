import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TASK_STATUS_OPTION = new InjectionToken<TaskStatusOptions>('task-status-option');

type TaskStatusOptions = {
  value: 'open' | 'done' | 'in-progress',
  status: TaskStatus
  text: string,
}[];

export const TaskStatusOptions: TaskStatusOptions = [
  {
    value: 'open',
    status: 'OPEN',
    text: 'Open',
  },
  {
    value: 'done',
    status: 'DONE',
    text: 'Complete',
  },
  {
    value: 'in-progress',
    status: 'IN_PROGRESS',
    text: 'In-Progress',
  }
];

export const TaskOptionStatusProvider: Provider = {
  provide: TASK_STATUS_OPTION,
  useValue: TaskStatusOptions
}


export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
