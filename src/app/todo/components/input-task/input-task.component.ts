import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent {

  constructor(private todoService : TodoService){

  }
  @ViewChild("inputTask") inputTask!: ElementRef;

  ngAfterViewInit(): void {    
    const $task = new Observable<Task>(observer => {
      let task = {'text': this.inputTask.nativeElement.value, 'checked': false}
      observer.next(task);
      observer.complete();
    })
    this.todoService.setInputTask($task);
  }


}
