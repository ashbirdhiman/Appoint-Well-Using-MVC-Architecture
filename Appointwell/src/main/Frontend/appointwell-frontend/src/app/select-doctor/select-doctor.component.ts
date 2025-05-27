import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Doctor} from "../models/Doctor";
import {AppointmentService} from "../Service/appointment.service";
import {ApiService} from "../Service/api-service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-select-doctor',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './select-doctor.component.html',
  styleUrl: './select-doctor.component.css'
})
export class SelectDoctorComponent {
  doctors: Doctor[] = [];  // Array to hold the list of doctors
  selectedDoctor: Doctor | null = null;  // Variable to hold the selected doctor

  constructor(private apiService: ApiService,private appointmentService:AppointmentService,private router:Router) { }

  ngOnInit(): void {
    this.fetchDoctors();  // Fetch the list of doctors when the component initializes
  }

  fetchDoctors(): void {
    this.apiService.getDoctors().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  selectDoctor(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    console.log('Selected Doctor:', doctor);
    this.appointmentService.setDoctor(this.selectedDoctor);
    this.appointmentService.setSpecialization(this.selectedDoctor.specialization);
    this.router.navigate(['/select-date-time']);
    // Additional logic for selecting a doctor can go here, e.g., navigation or displaying more details
  }
}
