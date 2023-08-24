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

  removeTask(task : Task){
    task.checked = !task.checked;
    task.animationClass = "fade-out";
    setTimeout(() => {
      this.todoService.removeTask(task);
    }, 300);
  }


  
}
