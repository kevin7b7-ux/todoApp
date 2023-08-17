import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'list-tasks',
  templateUrl: './list-tasks.component.html',
  styles: [
  ]
})
export class ListTasksComponent {

  constructor(private todoService : TodoService ){

  }

  taskList: string[] = this.todoService.getListTask(); 

}
