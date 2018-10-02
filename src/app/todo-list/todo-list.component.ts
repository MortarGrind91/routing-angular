import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: string = '';

  todos: Todo[] = [
    {id:1, name: 'Buy milk', done:false},
    {id:2, name: 'Clean the room', done:false},
    {id:3, name: 'Learn Angular', done:false}
  ];

  constructor() { }

  ngOnInit() {

  }

  addNewTodo(){
    if(this.newTodo !== ''){
    this.todos.push({id:this.todos.length +1, name:this.newTodo, done:false});
    this.newTodo = '';
    }
  }

  toggleDone(todo){
    todo.done = !todo.done;
  }

  removeTodo(index){
    this.todos.splice(index, 1);
  }

}
