import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskServiceToken } from '../../app.module';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // private tService = inject(TaskService);

  constructor(@Inject(TaskServiceToken) private tService: TaskService) { }

  onAddTask(title: string, description: string) {
    this.formEl()?.nativeElement.reset();
    this.tService.addTask({ title, description });
  }
}
