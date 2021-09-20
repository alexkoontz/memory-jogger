import { Component, OnInit } from '@angular/core';
import {DbconnectService} from 'src/app/services/dbconnect.service';

@Component({
  selector: 'app-dbconnect',
  templateUrl: './dbconnect.component.html',
  styleUrls: ['./dbconnect.component.css']
})
export class DbconnectComponent implements OnInit {

  constructor(private dbconnect:DbconnectService) { }

  ngOnInit(): void {
    this.dbconnect.performGetEx().subscribe();
  }

}
