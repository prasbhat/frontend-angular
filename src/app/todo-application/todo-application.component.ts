import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { TodoApplication } from './todo-application';
import { TodoTaskComments } from "./to-do-task-comments";

@Component({
  selector: 'app-todo-application',
  templateUrl: './todo-application.component.html',
  styleUrls: ['./todo-application.component.css']
})
export class TodoApplicationComponent implements OnInit {
  todoApplication:TodoApplication;
  todoTaskComments: TodoTaskComments;
  isSinglePageView: Boolean = false;
  isEdit: Boolean = false;
  todoStatus = [];
  showToggleCommentTable:boolean = false;

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.retrieveAllTodoList();
    this.retrieveStatus();
   }

   retrieveAllTodoList() {
    this.todoService.retrieveAllTodoList().subscribe((data: TodoApplication) => {
      this.todoApplication = data;
    })
   }

   retrieveStatus() {
    this.todoService.retrieveStatus().subscribe((data: any[]) => {
      this.todoStatus = data;
    })
   }

   view(todoApp:TodoApplication) {
    this.todoApplication = todoApp;
    this.isSinglePageView = true;
   }

   delete(todoApp:TodoApplication) {
    this.todoService.deleteItem(todoApp.systemTasksId).subscribe((data: string) => {})
    location.reload();
   }

   edit(todoApp:TodoApplication) {
    this.todoApplication = todoApp;
    this.todoTaskComments = {todoTaskCommentsId:null, taskComments:'', creationDate: null};
    this.isEdit = true;
    this.isSinglePageView = true;
   }

   create() {
    this.todoApplication = {systemTasksId:null, title:'', description:'', creationDate: null, dueDate: new Date(), status:'', todoTaskCommentsSet:null};
    this.isEdit = true;
    this.isSinglePageView = true;
   }

   submit(todoApplication:TodoApplication, todoTaskComments:TodoTaskComments) {
    if(todoApplication.systemTasksId != null) {// For Update
      var todoTaskCommentsArray= [];
      todoTaskCommentsArray.push(todoTaskComments);
      todoApplication.todoTaskCommentsSet=todoTaskCommentsArray;
      
      this.todoService.updateItem(todoApplication).subscribe((data: TodoApplication) => {
        this.todoApplication = data;
      })
    }
    else { //For Create, id = null
      this.todoService.createItem(todoApplication).subscribe((data: TodoApplication) => {
        this.todoApplication = data;
      })
    }
    location.reload();
   }

   toggleCommentsTable(){
     this.showToggleCommentTable = !this.showToggleCommentTable;
   }
}
