import { Component, OnInit } from '@angular/core';
import { Hospital } from "../models/Hospital";
import { Doctor } from "../models/Doctor";
import { AppointmentService } from "../Service/appointment.service";
import { NgForOf } from "@angular/common";
import { QRCodeModule } from "angularx-qrcode";
import { Symptom } from "../models/Appointment";
import { MateraQrCodeComponent } from "../matera-qr-code/matera-qr-code.component";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { materaApiService } from "../Service/matera-qr-service";

@Component({
  selector: 'app-appointment-confirm',
  standalone: true,
  imports: [
    NgForOf,
    QRCodeModule,
    MateraQrCodeComponent
  ],
  templateUrl: './appointment-confirm.component.html',
  styleUrls: ['./appointment-confirm.component.css']
})
export class AppointmentConfirmComponent implements OnInit {
  hospital: Hospital | undefined;
  doctor: Doctor | undefined;
  symptoms: Symptom[] = [];
  dateTime: { date: string, time: string } = { date: '', time: '' };
  specialization: string = '';

  qrCodeData: string = '';
  qrcodeContent: string = '';  // This will store the QR code content

  constructor(
    private appointmentService: AppointmentService,
    private materaApiService: materaApiService
  ) {}

  ngOnInit(): void {
    // Fetch data for appointment confirmation
    this.hospital = this.appointmentService.getHospital();
    this.doctor = this.appointmentService.getDoctor();
    this.symptoms = this.appointmentService.getSymptoms();
    this.dateTime = this.appointmentService.getDateTime();
    this.specialization = this.appointmentService.getSpecialization();

    // Get token for Matera API
    this.materaApiService.getToken().subscribe(response => {
      if (response && response.access_token) {
        sessionStorage.setItem("matera-auth-token", response.access_token);
      }
    });

    // Generate QR Code with appointment data
    this.generateQRCode();

    // Fetch QR code from Matera API
    this.materaApiService.generateStaticQrCode().pipe(
      catchError(error => {
        console.error('Error fetching QR code:', error);
        if (error && error.data && error.data.items.length > 0) {
          this.qrcodeContent = error.data.items[0].data;
          console.log('QR Code Content:', this.qrcodeContent);
        }
        return of(null); // Return null in case of an error
      })
    ).subscribe(response => {
      console.log(response)
      if (response && response.data && response.data.items.length > 0) {
        this.qrcodeContent = response.data.items[0].data.qrcodeContent;
        console.log('QR Code Content:', this.qrcodeContent);
      }
    });
  }

  // Function to generate QR code data
  generateQRCode(): void {
    const appointmentData = {
      hospital: this.hospital?.name,
      doctor: this.doctor?.name,
      symptoms: this.symptoms.join(', '),
      dateTime: `${this.dateTime.date} ${this.dateTime.time}`,
      specialization: this.specialization
    };

    // Convert the object to a JSON string to be used as QR code data
    this.qrCodeData = JSON.stringify(appointmentData);
  }
}
