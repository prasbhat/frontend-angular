import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private TODO_API_URL = 'http://localhost:8080/Todo';

  constructor(private httpClient: HttpClient) { }

  public retrieveAllTodoList(){
    return this.httpClient.get(this.TODO_API_URL+'/findAll');
  }

  retrieveById(id) {
    return this.httpClient.get(this.TODO_API_URL+'/find/'+id);
  }

}
