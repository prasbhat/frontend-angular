import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { TodoApp } from './todo-app';


@Component({
  selector: 'app-todo-application',
  templateUrl: './todo-application.component.html',
  styleUrls: ['./todo-application.component.css']
})
export class TodoApplicationComponent implements OnInit {
  todoApplication:TodoApp;
  todoApp: TodoApp;
  isEdit: Boolean = false;
  todoStatus = [];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.retrieveAllTodoList();
    this.retrieveStatus();
   }

   retrieveAllTodoList() {
    this.todoService.retrieveAllTodoList().subscribe((data: TodoApp) => {
      console.log(data);
      this.todoApplication = data;
    })
   }

   view(event, todoApp) {
    console.log("TodoApp="+JSON.stringify(todoApp));
    this.todoApp = todoApp;
   }

   delete(event, todoApp) {
    console.log("TodoApp Id="+todoApp.id);
    this.todoService.deleteItem(todoApp.id).subscribe((data: string) => {
      console.log(data);
    })
    location.reload();
   }

   edit(event, todoApp:TodoApp) {
    console.log("TodoApp="+JSON.stringify(todoApp));
    this.todoApp = todoApp;
    this.isEdit = true;
   }

   submit(event, todoApp:TodoApp) {
    console.log("TodoApp="+JSON.stringify(todoApp));
    if(todoApp.id != 0) // For create, id=0
    this.todoService.updateItem(todoApp).subscribe((data: TodoApp) => {
      console.log(data);
    })
    else {
      this.todoService.createItem(todoApp).subscribe((data: TodoApp) => {
        console.log(data);
      })
    }
    location.reload();
   }

   retrieveStatus() {
    this.todoService.retrieveStatus().subscribe((data: any[]) => {
      console.log(data);
      this.todoStatus = data;
    })
   }

   create(event) {
    console.log("Create todoApp");
    this.todoApp = {id:0,title:'', description:'', dueDate: new Date(), status:''};
    this.isEdit = true;
   }
}
