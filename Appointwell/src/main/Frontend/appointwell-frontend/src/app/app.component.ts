import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HeaderComponent} from "./header/header.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./Service/api-service";
import {QRCodeModule} from "angularx-qrcode";
import {materaApiService} from "./Service/matera-qr-service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,// Use CommonModule instead of BrowserModule
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers:[ApiService,materaApiService,{ provide: 'SPEECH_LANG', useValue: 'en-US'}],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointwell-frontend';
}
