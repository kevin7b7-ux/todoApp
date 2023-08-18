import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent{

  @Input()
  public task : string = "";



}
