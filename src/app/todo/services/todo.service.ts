import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public listTask: string[] = ["Cook food", "Get Cold", "Run 1km"];
  private inputTask : Observable<string> = new Observable<string>;

  getListTask(): string[]{
    return this.listTask;
  }

  setAddTask(newTask: string) {
    this.listTask.push(newTask);
  }

  getInputTask(): Observable<string>{
    return this.inputTask
  }
  
  setInputTask(value : Observable<string>){
    this.inputTask = value;
  }
}
