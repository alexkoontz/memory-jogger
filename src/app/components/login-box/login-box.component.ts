import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { RoomTableComponent } from '../room-table/room-table.component';
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  loginHeader: string = 'Login';
  public loginForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.loginForm.value.username && a.Password === this.loginForm.value.password
      })
      if(user){
        alert("Login successful");

        if(this.loginForm.value.username === "abe456") {
          this.loginForm.reset();
          this.router.navigate(['admin']);
        } else {
          this.loginForm.reset();
          this.router.navigate(['user']);
        }
      } else {
        alert("Login not correct");
      }
    },err=>{
      alert("Something went wrong")
    })

  }

}
