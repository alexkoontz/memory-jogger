import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { UserModel } from './users-panel.model';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

  formValue !: FormGroup;
  userModelObject : UserModel = new UserModel();
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Username : [''],
      Password : [''],
      LastName : [''],
      FirstName : [''],
      Address : [''],
      PolicyNumber : [''],
      ClaimNumber : [''],
      DateOfLoss : [''],
      AdminStatus : [''],
    })
  }

  postUserDetails(){
    this.userModelObject.Username = this.formValue.value.Username;
    this.userModelObject.Password = this.formValue.value.Password;
    this.userModelObject.LastName = this.formValue.value.LastName;
    this.userModelObject.FirstName = this.formValue.value.FirstName;
    this.userModelObject.Address = this.formValue.value.Address;
    this.userModelObject.PolicyNumber = this.formValue.value.PolicyNumber;
    this.userModelObject.ClaimNumber = this.formValue.value.ClaimNumber;
    this.userModelObject.DateOfLoss = this.formValue.value.DateOfLoss;
    this.userModelObject.Admin = this.formValue.value.AdminStatus;

    this.api.postUser(this.userModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("User Added Successfully");
    },
    err=>{
      alert("Error: User not added.  Something went wrong.")
    })
  }

}
