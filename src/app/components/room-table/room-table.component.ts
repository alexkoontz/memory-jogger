import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent implements OnInit {
  tableRoomHeader: string = 'Room Name Here';
  constructor() { }

  ngOnInit(): void {
  }

}
