import {Component, OnInit} from '@angular/core';
import {map, Observable, switchMap} from "rxjs";
import {WalkInAppointment} from "../../models/WalkInAppointment";
import {ApiService} from "../../Service/api-service";
import {DatePipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hospital-dashboard',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './hospital-dashboard.component.html',
  styleUrl: './hospital-dashboard.component.css'
})
export class HospitalDashboardComponent implements OnInit{

  walkInAppointments: any[] = [];  // This will hold the walk-in appointments with patient names

  constructor(private apiService: ApiService,private router:Router) {}

  ngOnInit(): void {
    const hospitalId = 1;  // Example hospital ID, you can change this dynamically if needed

    // Fetch appointments first
    this.apiService.getAllWalkInAppointments(hospitalId).subscribe(
      (appointments) => {
        this.walkInAppointments = appointments;  // Store the walk-in appointments
        this.fetchPatientNames();  // After fetching appointments, get the patient names
      },
      (error) => {
        console.error('Error fetching appointments', error);  // Handle errors
      }
    );
  }

  // Function to fetch patient names for each appointment
  fetchPatientNames(): void {
    this.walkInAppointments.forEach(appointment => {
      this.apiService.getPatientNameByID(appointment.patientId).subscribe(
        (patient) => {
          appointment.patient_name = patient.name;  // Assuming the response has 'name' field
        },
        (error) => {
          console.error('Error fetching patient name for appointment', appointment.id, error);
        }
      );
    });
  }

  // Handle action button click for each appointment
  onActionClick(appointmentId: number, patient_name: any) {

    sessionStorage.setItem("appointment-number",appointmentId+"");
    sessionStorage.setItem("patient-name",patient_name)

    console.log('Action clicked for appointment ID:', appointmentId);
    this.router.navigate(['/view-edit-walk-in-appointment'])
    // Add any additional functionality here
  }
}
