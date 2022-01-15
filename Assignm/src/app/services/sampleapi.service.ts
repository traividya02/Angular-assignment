import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SampleapiService {

  baseUrl: string = "http://uat.lightingmanager.in/panel/gettestlist";
  constructor(private httpclient: HttpClient) { }

  getData(): Observable<any> {

    //initialise new parameter
    let param1 = new HttpParams().set('org_id', "3");
    return this.httpclient.get(this.baseUrl, {params: param1});
  }

}




