import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoApplication } from './todo-application/todo-application';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private TODO_API_URL = 'http://localhost:8080/todo-app/tasks';

  constructor(private httpClient: HttpClient) { }

  public retrieveAllTodoList(){
    return this.httpClient.get(this.TODO_API_URL);
  }

  public deleteItem(id:number){
    return this.httpClient.delete(this.TODO_API_URL+'/'+id);
  }

  public updateItem(todoApp: TodoApplication){
    return this.httpClient.put(this.TODO_API_URL, todoApp);
  }

  public retrieveStatus(){
    return this.httpClient.get(this.TODO_API_URL+'/status');
  }

  public createItem(todoApp: TodoApplication){
    return this.httpClient.post(this.TODO_API_URL, todoApp);
  }
}
