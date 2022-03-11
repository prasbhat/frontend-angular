import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodoApplication } from './todo-application/todo-application';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private TODO_API_URL = 'http://localhost:8080/Todo';

  constructor(private httpClient: HttpClient) { }

  public retrieveAllTodoList(){
    return this.httpClient.get(this.TODO_API_URL+'/findAll');
  }

  public deleteItem(id:number){
    return this.httpClient.delete(this.TODO_API_URL+'/deleteById/'+id);
  }

  public updateItem(todoApp: TodoApplication){
    return this.httpClient.put(this.TODO_API_URL+'/update', todoApp);
  }

  public retrieveStatus(){
    return this.httpClient.get(this.TODO_API_URL+'/getStatus');
  }

  public createItem(todoApp: TodoApplication){
    return this.httpClient.post(this.TODO_API_URL+'/create', todoApp);
  }
}
