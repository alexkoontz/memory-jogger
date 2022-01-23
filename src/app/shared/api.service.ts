import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  postUser(data: any){
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUser(data: any){
    return this.http.get<any>("http://localhost:3000/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(data: any,username: string){
    return this.http.put<any>("http://localhost:3000/users"+username, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUser(username: string){
    return this.http.delete<any>("http://localhost:3000/users"+username)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


}
