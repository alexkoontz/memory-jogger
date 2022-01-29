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
  userData !: any;
  showAddButton !: boolean;
  showUpdateButton !: boolean;
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
      Admin : [''],
    })
    this.getAllUsers();
  }

  /**
   * POST (add) new user
   */
  postUserDetails(): void{
    //set id to 0 before posting, so json-server asigns correct id
    this.userModelObject.id = 0;
    
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
      //After new user is added successfully, reference cancel button to close modal
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllUsers();
    },
      err=>{
        alert("Error: User not added.  Something went wrong.")
      })
    }

  getAllUsers(){
    this.api.getUser()
    .subscribe(res=>{
      this.userData = res;
    })
  }

  revealUserAddButton(){
    this.formValue.reset();
    this.showAddButton = true;
    this.showUpdateButton = false;
  }

  deleteUser(row : any){
    this.api.deleteUser(row.id)
    .subscribe(res=>{
      alert("Employee deleted successfully");
      this.getAllUsers();
    })
  }

  onEdit(row : any){
    //Reveal update button and hide add button on modal
    this.showAddButton = false;
    this.showUpdateButton = true;

    this.userModelObject.id = row.id;
    this.formValue.controls['Username'].setValue(row.Username)
    this.formValue.controls['Password'].setValue(row.Password)
    this.formValue.controls['LastName'].setValue(row.LastName)
    this.formValue.controls['FirstName'].setValue(row.FirstName)
    this.formValue.controls['Address'].setValue(row.Address)
    this.formValue.controls['PolicyNumber'].setValue(row.PolicyNumber)
    this.formValue.controls['ClaimNumber'].setValue(row.ClaimNumber)
    this.formValue.controls['DateOfLoss'].setValue(row.DateOfLoss)
    this.formValue.controls['Admin'].setValue(row.Admin)
  }

  updateUserDetails(){
    this.userModelObject.Username = this.formValue.value.Username;
    this.userModelObject.Password = this.formValue.value.Password;
    this.userModelObject.LastName = this.formValue.value.LastName;
    this.userModelObject.FirstName = this.formValue.value.FirstName;
    this.userModelObject.Address = this.formValue.value.Address;
    this.userModelObject.PolicyNumber = this.formValue.value.PolicyNumber;
    this.userModelObject.ClaimNumber = this.formValue.value.ClaimNumber;
    this.userModelObject.DateOfLoss = this.formValue.value.DateOfLoss;
    this.userModelObject.Admin = this.formValue.value.Admin;

    this.api.updateUser(this.userModelObject, this.userModelObject.id)
    .subscribe(res=>{
      alert("Updated user successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllUsers();
    })
  }
}
