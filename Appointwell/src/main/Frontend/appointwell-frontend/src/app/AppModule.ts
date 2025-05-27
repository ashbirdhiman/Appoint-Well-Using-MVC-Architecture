import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./Service/api-service";
import {SpeechModule} from "ngx-speech";

@NgModule({
  declarations: [],
  imports: [HttpClientModule,
    CommonModule
  ],
  providers:[HttpClientModule,ApiService]
})
export class AppModule { }
