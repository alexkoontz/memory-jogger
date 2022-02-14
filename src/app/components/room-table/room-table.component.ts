import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { ItemModel } from './room-table.model';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent implements OnInit {

  hardcodedUser: string = 'jds123';
  formValue !: FormGroup;
  showAddButton !: boolean;
  showUpdateButton !: boolean;
  itemModelObject : ItemModel = new ItemModel();
  itemData !: any;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      RoomName : [''],
      Description : [''],
      Brand : [''],
      Quantity : [''],
      Age : [''],
      CostPerItem : ['']
    })
    this.getAllItemsByUser();
  }

  postItemDetails(){
    //set id to 0 before posting, so json-server asigns correct id
    this.itemModelObject.id = 0;

    this.itemModelObject.Username = this.hardcodedUser;
    this.itemModelObject.RoomName = this.formValue.value.RoomName;
    this.itemModelObject.Description = this.formValue.value.Description;
    this.itemModelObject.Brand = this.formValue.value.Brand;
    this.itemModelObject.Quantity = this.formValue.value.Quantity;
    this.itemModelObject.Age = this.formValue.value.Age;
    this.itemModelObject.CostPerItem = this.formValue.value.CostPerItem;

    this.api.postItem(this.itemModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("Item has been added successfully");
      this.getAllItemsByUser();
    },
    err=>{
      alert("Error: Item was not able to be added")
    }
    )
  }

  getAllItemsByUser(){
    this.api.getItemByUser(this.hardcodedUser)
    .subscribe(res=>{
      this.itemData = res;
    })
  }

  switchHardcodedUser(){
    if(this.hardcodedUser == "jds123"){
      this.hardcodedUser = "abe456";
    } else {
      this.hardcodedUser = "jds123";
    }
    this.getAllItemsByUser();
  }

  revealItemAddButton(){
    this.formValue.reset();
    this.showAddButton = true;
    this.showUpdateButton = false;
  }

}
