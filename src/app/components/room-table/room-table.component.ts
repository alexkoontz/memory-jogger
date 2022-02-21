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
  currentItemId : number = 0;
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
    this.itemModelObject.TotalValue = (parseFloat(this.formValue.value.Quantity) * parseFloat(this.formValue.value.CostPerItem));

    this.api.postItem(this.itemModelObject)
    .subscribe(res=>{
      console.log(res);
      alert("Item has been added successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
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

  deleteItem(row : any){
    this.api.deleteItem(row.id)
    .subscribe(res=>{
      alert("Item deleted successfully");
      this.getAllItemsByUser();
    })
  }

  onEdit(row : any){
    this.showAddButton = false;
    this.showUpdateButton = true;
    
    this.itemModelObject.id = row.id;
    //Because the item ID does not exist in the form on updateItemDetails, this variable hold the current item being edited
    this.currentItemId = row.id;
    this.formValue.controls['RoomName'].setValue(row.RoomName);
    this.formValue.controls['Description'].setValue(row.Description);
    this.formValue.controls['Brand'].setValue(row.Brand);
    this.formValue.controls['Quantity'].setValue(row.Quantity);
    this.formValue.controls['Age'].setValue(row.Age);
    this.formValue.controls['CostPerItem'].setValue(row.CostPerItem);

  }

  updateItemDetails(){

    this.itemModelObject.id = this.currentItemId;
    this.itemModelObject.Username = this.hardcodedUser;
    this.itemModelObject.RoomName = this.formValue.value.RoomName;
    this.itemModelObject.Description = this.formValue.value.Description;
    this.itemModelObject.Brand = this.formValue.value.Brand;
    this.itemModelObject.Quantity = this.formValue.value.Quantity;
    this.itemModelObject.Age = this.formValue.value.Age;
    this.itemModelObject.CostPerItem = this.formValue.value.CostPerItem;
    this.itemModelObject.TotalValue = (parseFloat(this.formValue.value.Quantity) * parseFloat(this.formValue.value.CostPerItem));

    this.api.updateItem(this.itemModelObject, this.itemModelObject.id)
    .subscribe(res=>{
      alert("Updated item successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllItemsByUser();
      //Reset current item being edited back to default of 0
      this.currentItemId = 0;
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
