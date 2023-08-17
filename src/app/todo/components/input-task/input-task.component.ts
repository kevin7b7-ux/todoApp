import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

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
    const $value = new Observable<string>(observer => {
      observer.next(this.inputTask.nativeElement.value);
      observer.complete();
    })
    this.todoService.setInputTask($value);
  }


}
