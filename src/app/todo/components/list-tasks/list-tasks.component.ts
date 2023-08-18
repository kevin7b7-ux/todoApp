import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'list-tasks',
  templateUrl: './list-tasks.component.html',
  styles: [
  ]
})
export class ListTasksComponent {

  constructor(private todoService : TodoService ){

  }

  taskList: Task[] = this.todoService.getListTask(); 

  removeTask(task : string){
    // this.todoService.removeTask(task);
  
  }


  
}
