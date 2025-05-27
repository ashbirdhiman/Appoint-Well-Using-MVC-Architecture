import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  totalHospitals = 12;
  activeAppointments = 80;
  doctorsAvailable = 25;
  patientsRegistered = 1500;

  constructor(private router:Router) {
  }
  addNewHospital() {
    this.router.navigate(['/add-hospital'])
  }

  addNewDoctor() {
    this.router.navigate(['/add-doctor'])
  }

  assignDoctor() {
    this.router.navigate(['/assign-doctor'])
  }
}
