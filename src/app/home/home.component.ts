import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private todoService:TodoService) { }

  todos:any='';
  ngOnInit(): void {
  }

  getAllTodos(){
    this.todoService.getAllTodos().subscribe({
      next: data => {
        this.todos = data;
        console.log(this.todos);
      },
      error: err => {
        console.log(err);

        if (err.error) {
          this.todos = JSON.parse(err.error).message;
        } else {
          this.todos = "Error with status: " + err.status;
        }
      }
    });
  }
  logout(){
    this.authService.logout().subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
