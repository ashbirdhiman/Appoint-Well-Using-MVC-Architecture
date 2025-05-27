import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
// import { HospitalService } from '../services/hospital.service';
import { Router } from '@angular/router';
import {ApiService} from "../../Service/api-service";
import {Hospital} from "../../models/Hospital";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-add-hospital',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-hospital.component.html',
  styleUrl: './add-hospital.component.css'
})
export class AddHospitalComponent {
  hospitalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.hospitalForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', [Validators.required, Validators.min(-90), Validators.max(90)]],
      longitude: ['', [Validators.required, Validators.min(-180), Validators.max(180)]],
      address: ['', Validators.required],
      waitTime: ['', [Validators.required, Validators.min(0)]]
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.hospitalForm.valid) {
      const formData = this.hospitalForm.value;

      // Send the form data to the API
      this.apiService.sendHospitalData(formData).subscribe(
        response => {
          console.log('API response:', response);
        },
        error => {
          console.error('Error occurred:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to send data to the API

}
