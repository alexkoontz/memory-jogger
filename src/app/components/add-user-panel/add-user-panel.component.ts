import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-panel',
  templateUrl: './add-user-panel.component.html',
  styleUrls: ['./add-user-panel.component.css']
})
export class AddUserPanelComponent implements OnInit {
  addUserHeader: string = 'Add User';
  constructor() { }

  ngOnInit(): void {
  }

}
