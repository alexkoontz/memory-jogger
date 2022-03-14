import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-logout',
  templateUrl: './header-logout.component.html',
  styleUrls: ['./header-logout.component.css']
})
export class HeaderLogoutComponent implements OnInit {
  title: string = 'North County App';
  constructor() { }

  ngOnInit(): void {
  }

}
