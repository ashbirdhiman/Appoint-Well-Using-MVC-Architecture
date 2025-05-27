import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

interface Appointment {
  id: number;
  available_date: string;
  start_time: string;
  end_time: string;
  doctor_id: number;
}
@Component({
  selector: 'app-select-availabilty',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './select-availabilty.component.html',
  styleUrl: './select-availabilty.component.css'
})
export class SelectAvailabiltyComponent {
// Sample data for appointments
  appointments: Appointment[] = [
    { id: 1, available_date: '2024-11-10', start_time: '09:00:00', end_time: '10:00:00', doctor_id: 1 },
    { id: 2, available_date: '2024-11-11', start_time: '11:00:00', end_time: '12:00:00', doctor_id: 2 },
    { id: 3, available_date: '2024-11-12', start_time: '14:00:00', end_time: '15:30:00', doctor_id: 3 },
    { id: 4, available_date: '2024-11-13', start_time: '16:00:00', end_time: '17:00:00', doctor_id: 4 },
    { id: 5, available_date: '2024-11-14', start_time: '10:00:00', end_time: '11:30:00', doctor_id: 5 },
    { id: 6, available_date: '2024-11-15', start_time: '13:00:00', end_time: '14:00:00', doctor_id: 1 },
    { id: 7, available_date: '2024-11-16', start_time: '08:00:00', end_time: '09:30:00', doctor_id: 2 },
    { id: 8, available_date: '2024-11-17', start_time: '15:00:00', end_time: '16:30:00', doctor_id: 3 },
    { id: 9, available_date: '2024-11-18', start_time: '12:00:00', end_time: '13:00:00', doctor_id: 4 },
    { id: 10, available_date: '2024-11-19', start_time: '09:30:00', end_time: '10:30:00', doctor_id: 5 }
  ];

  // State for selected doctor
  selectedDoctor: number = 1;

  // Get available slots for the selected doctor
  get availableSlots(): Appointment[] {
    return this.appointments.filter(appointment => appointment.doctor_id === this.selectedDoctor);
  }

  // Handle doctor selection change
  onDoctorChange(event: any): void {
    this.selectedDoctor = +event.target.value;
  }
}
