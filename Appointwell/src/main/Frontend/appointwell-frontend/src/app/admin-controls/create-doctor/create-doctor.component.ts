import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from "../../Service/api-service";
import {Hospital} from "../../models/Hospital";
import {NgForOf, NgIf} from "@angular/common";
@Component({
  selector: 'app-create-doctor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './create-doctor.component.html',
  styleUrl: './create-doctor.component.css'
})
export class CreateDoctorComponent implements OnInit{
  doctorForm: FormGroup;
  hospitals: Hospital[] = []; // Stores list of hospitals for dropdown
  status:string[]=["available","not-available"];
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      specialization: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      status: ['', Validators.required],
      hospitalId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadHospitals();
  }

  loadHospitals(): void {
    this.apiService.getAllHospitals().subscribe(data=>
      this.hospitals=data);
  }


  onSubmit(): void {
    if (this.doctorForm.valid) {
      const formData = this.doctorForm.value;

      // Send the form data to the API
      this.apiService.addDoctor(formData).subscribe(
        response => {
          alert("Add doctor Successfully");
        },
        error => {
          alert("Error Occurred ");
        }
      );
    } else {
      console.log('Form is invalid');
    }
    }

}
