import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styles: [
  ]
})
export class ButtonAddComponent {

  constructor(private todoService : TodoService){

  }
  newTask : string = "";

  getValueInput(){
    this.todoService.getInputTask().subscribe(
      value => this.todoService.setAddTask(value)
    );
  }
}
