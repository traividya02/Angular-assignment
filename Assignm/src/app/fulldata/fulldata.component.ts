import { Component, OnInit, Input } from '@angular/core';
import { EachdataComponent } from '../eachdata/eachdata.component';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';


@Component({
  selector: 'app-fulldata',
  templateUrl: './fulldata.component.html',
  styleUrls: ['./fulldata.component.css']
})
export class FulldataComponent implements OnInit {

  @Input() arrdata: any;
  constructor(private dialogRef: MatDialog) { }

  openDialog(row: any){
    const dialog=this.dialogRef.open(EachdataComponent, {
      data: row
    });
  }

  openMap(row: any){
    const dialog=this.dialogRef.open(MapComponent, {
      data: row
    })
  }

  ngOnInit(): void {
  }

}
