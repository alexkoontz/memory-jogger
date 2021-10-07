import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-panel',
  templateUrl: './document-panel.component.html',
  styleUrls: ['./document-panel.component.css']
})
export class DocumentPanelComponent implements OnInit {
  documentHeader: string = 'CSV Downloader';
  constructor() { }

  ngOnInit(): void {
  }

}
