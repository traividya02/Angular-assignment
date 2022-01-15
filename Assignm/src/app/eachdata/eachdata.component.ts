import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-eachdata',
  templateUrl: './eachdata.component.html',
  styleUrls: ['./eachdata.component.css']
})
export class EachdataComponent implements OnInit {

  @Input() arrdata: any;
  row: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.row=data;
   }

  ngOnInit(): void {
  }

}
