import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FulldataComponent } from './fulldata/fulldata.component';
import { EachdataComponent } from './eachdata/eachdata.component';
import { MapComponent } from './map/map.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'
import { SampleapiService } from './services/sampleapi.service';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    FulldataComponent,
    EachdataComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [SampleapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
