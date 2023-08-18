import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public listTask: Task[] = [{'text': "Run a 1KM", checked: false},{'text': "Read a book", checked: false}];
  private inputTask : Observable<Task> = new Observable<Task>;

  getListTask(): Task[]{
    return this.listTask;
  }

  setAddTask(newTask: Task) {
    this.listTask.push(newTask);
  }

  getInputTask(): Observable<Task>{
    return this.inputTask
  }
  
  setInputTask(value : Observable<Task>){
    this.inputTask = value;
  }

  removeTask(task : Task){
   let index = this.listTask.findIndex(item => task.text === item.text);
   this.listTask.splice(index,1);
   
  }
}
