import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import { Router } from '@angular/router';

import {ApiService} from "../../Service/api-service";
import {Doctor} from "../../models/Doctor";
import {Hospital} from "../../models/Hospital";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-assign-doctor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './assign-doctor.component.html',
  styleUrl: './assign-doctor.component.css'
})
export class AssignDoctorComponent  implements OnInit {
  assignForm: FormGroup;
  doctors: Doctor[] = [];
  hospitals: Hospital[] = [];

  constructor(
    private fb: FormBuilder,
    private apiService:ApiService,
    private router: Router
  ) {
    this.assignForm = this.fb.group({
      doctorId: ['', Validators.required],
      hospitalId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDoctors();
    this.loadHospitals();
  }

    loadDoctors(): void {
      this.apiService.getDoctors().subscribe(
        (data: Doctor[]) => {
          this.doctors = data;
        },
        (error) => {
          console.error('Error fetching doctors:', error);
        }
      );
    }

    loadHospitals(): void {
      this.apiService.getAllHospitals().subscribe(
        (hospitals: Hospital[]) => {
          this.hospitals = hospitals;
        },
        error => {
          console.error('Error loading hospitals:', error);
        }
      );
    }

  onSubmit(): void {
    if (this.assignForm.valid) {
      const { doctorId, hospitalId } = this.assignForm.value;
      this.apiService.assignDoctorToHospital(doctorId, hospitalId).subscribe(
        response => {
          console.log('Doctor assigned successfully:', response);
          this.router.navigate(['/doctors']); // Redirect to doctor list or success page
        },
        error => {
          console.error('Error assigning doctor:', error);
        }
      );
    }
  }
}
