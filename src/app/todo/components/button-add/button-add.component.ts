import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { tap, pipe, filter } from 'rxjs'

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
    this.todoService.getInputTask()
    .pipe(
      filter(value => value.text !== "")
    )
    .subscribe(value => { this.todoService.setAddTask(value)});
    
  
  }
}
