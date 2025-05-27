import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Appointment} from "../../models/Appointment";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {AppointmentService} from "../../Service/appointment.service";

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {
  appointments: Appointment[] = [
    {
      id: 1,
      patientId: 1,
      doctorId: 1,
      hospitalName: 'City Hospital',
      date: '2024-12-01T10:00:00', // Use ISO format for DateTime
      status: 'Confirmed',
      paymentStatus: 'Paid',
      appointmentType: 'offline',
      symptoms: [

      ],
      patient: {
        id: 1,
        name: 'John Doe',
        age: 30,
        contactNumber: '123-456-7890'
      }
    },
    {
      id: 2,
      patientId: 2,
      doctorId: 2,
      hospitalName: 'Green Valley Clinic',
      date: '2024-12-05T14:00:00',
      status: 'Pending',
      paymentStatus: 'Unpaid',
      appointmentType: 'online',
      symptoms: [

      ],
      patient: {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        contactNumber: '098-765-4321'
      }
    }
  ];


  constructor(private router: Router,private appointmentService:AppointmentService) {}

  viewAppointmentDetails(appointmentId: number): void {
    this.router.navigate(['/appointment-details', appointmentId]);
  }

  navigateToBookAppointment(): void {
    this.router.navigate(['/select-hospital']);
  }

  bookWalkInAppointment(): void {
    // this.appointmentService.setHospital(hospital);
    this.appointmentService.setAppointmentType("walk-in")
    this.router.navigate(['/select-hospital']);
  }
}
