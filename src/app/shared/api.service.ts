import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //User-related methods
  postUser(data: any){
    return this.http.post<any>("http://localhost:3000/users", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUser(){
    return this.http.get<any>("http://localhost:3000/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateUser(data : any,id : number){
    return this.http.put<any>("http://localhost:3000/users/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUser(id : number){
    return this.http.delete<any>("http://localhost:3000/users/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  //Item-related methods
  postItem(data: any){
    return this.http.post<any>("http://localhost:3000/items", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getItem(){
    return this.http.get<any>("http://localhost:3000/items")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getItemByUser(user : string){
    return this.http.get<any>("http://localhost:3000/items?Username="+user)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateItem(data : any,id : number){
    return this.http.put<any>("http://localhost:3000/items/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteItem(id : number){
    return this.http.delete<any>("http://localhost:3000/items/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
