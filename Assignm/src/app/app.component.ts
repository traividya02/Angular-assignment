import { Component } from '@angular/core';
import { SampleapiService } from './services/sampleapi.service';
import { Data } from './classes/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignm';

  constructor(private _sampleapiservice: SampleapiService) {

  }
  n=[  
    {  
      "_id": "",
      "mac_id": "",
      "panel_name": "",
      "r_pf_status": 0,
      "r_mcb_status": 0,
      "r_load_status": 0,
      "r_volt_status": 0,
      "Lng": 0,
      "Lat": 0  
    }  ]
  arrdata: Data[] = this.n;

  ngOnInit() {

    this._sampleapiservice.getData().subscribe(data => {
      console.log(data);
      this.arrdata=data.result;
    })
  }

}
