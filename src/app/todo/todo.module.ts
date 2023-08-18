import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { MaterialModule } from '../material/material.module';
import { TaskComponent } from './components/task/task.component';




@NgModule({
  declarations: [
    MainpageComponent,
    InputTaskComponent,
    ButtonAddComponent,
    ListTasksComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,    
    MaterialModule
  ],
  exports: [
    MainpageComponent
  ]
})
export class TodoModule { }
