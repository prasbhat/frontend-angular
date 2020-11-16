import { Component, OnInit } from '@angular/core';
import { TodoApplicaton } from './todo-application';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-application',
  templateUrl: './todo-application.component.html',
  styleUrls: ['./todo-application.component.css']
})
export class TodoApplicationComponent implements OnInit {
  todoApplication =[];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.retrieveAllTodoList();
    
   }

   retrieveAllTodoList() {
    this.todoService.retrieveAllTodoList().subscribe((data: any[]) => {
      console.log(data);
      this.todoApplication = data;
    })
   }

   view(event, todoApp) {
     console.log(todoApp);
   }

}
