import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user-panel',
  templateUrl: './delete-user-panel.component.html',
  styleUrls: ['./delete-user-panel.component.css']
})
export class DeleteUserPanelComponent implements OnInit {
  deleteUserHeader: string = 'Delete User';
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#deleteUserForm').submit(function() {
        var c = confirm("Are you sure you want to delete this user and all of their data?");
        return c; //you can just return c because it will be true or false
    });
  });
  }
  

}
