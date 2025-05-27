import { Component } from '@angular/core';
import {AppointmentService} from "../Service/appointment.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Doctor} from "../models/Doctor";

@Component({
  selector: 'app-choose-specialization',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './choose-specialization.component.html',
  styleUrl: './choose-specialization.component.css'
})
export class ChooseSpecializationComponent {
  specializations = ['Cardiology', 'Neurology', 'Pediatrics'];
  doctors = [
    { specialization: 'Cardiology', name: 'Dr. A' },
    { specialization: 'Neurology', name: 'Dr. B' },
    { specialization: 'Pediatrics', name: 'Dr. C' }
  ];
  selectedSpecialization: string = '';
  availableDoctors: Doctor[] = [];

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  onSpecializationChange() {
    // this.availableDoctors = this.doctors
    //   .filter(doc => doc.specialization === this.selectedSpecialization)
    //   .map(doc => doc.name);
  }

  selectDoctor(doctor: Doctor) {
    this.appointmentService.setDoctor(doctor);
    // Proceed with booking the appointment or other next steps
  }
}


