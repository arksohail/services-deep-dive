import { InjectionToken, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { FormsModule } from "@angular/forms";
import { TaskItemComponent } from "./tasks/tasks-list/task-item/task-item.component";
import { TaskOptionStatusProvider } from "./tasks/task.model";
import { TaskService } from "./tasks/task.service";
import { BrowserModule } from "@angular/platform-browser";

export const TaskServiceToken = new InjectionToken<TaskService>('task-service-token')

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent,
    TasksListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskOptionStatusProvider,
    {
      provide: TaskServiceToken,
      useClass: TaskService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}