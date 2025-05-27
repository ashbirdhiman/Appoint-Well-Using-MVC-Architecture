import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { WalkInAppointment } from "../../models/WalkInAppointment";
import { ApiService } from "../../Service/api-service";
import { Doctor } from '../../models/Doctor';
import {NgForOf} from "@angular/common"; // Import Doctor model

@Component({
  selector: 'app-view-edit-walk-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './view-edit-walk-in.component.html',
  styleUrls: ['./view-edit-walk-in.component.css']
})
export class ViewEditWalkInComponent implements OnInit {

  // @ts-ignore
  appointmentForm: FormGroup;
  walkInAppointment: WalkInAppointment | null = null;
  doctors: Doctor[] = [];  // Array to store list of doctors

   appointmentId:string = "";
  patientName:string = "";

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      id: ['', Validators.required],
      patientId: ['', Validators.required],
      hospitalId: ['', Validators.required],
      doctorId: ['', Validators.required],  // Dropdown for doctor selection
      oldTimeSlot: ['', Validators.required],
      updatedTimeSlot: ['', Validators.required],
      status: ['', Validators.required],
      patientName: [''],
      hospitalName: ['']
    });
    // @ts-ignore
    this.appointmentId=sessionStorage.getItem("appointment-number");
    // Fetch initial data
    this.getAppointmentData();
    this.loadDoctors();  // Load all doctors for dropdown

    // @ts-ignore
    this.patientName=sessionStorage.getItem("patient-name");
    console.log(this.patientName)
  }

  getAppointmentData(): void {

    if (this.appointmentId) {
      this.apiService.getAllWalkInAppointmentByID(this.appointmentId).subscribe(
        data => {
          this.walkInAppointment = data;
          if (this.walkInAppointment) {
            this.appointmentForm.patchValue({
              id: this.walkInAppointment.id,
              patientId: this.walkInAppointment.patientId,
              hospitalId: this.walkInAppointment.hospitalId,
              doctorId: this.walkInAppointment.doctorId,
              oldTimeSlot: this.walkInAppointment.oldTimeSlot,
              updatedTimeSlot: this.walkInAppointment.updatedTimeSlot,
              status: this.walkInAppointment.status,
              patientName: this.patientName,
              hospitalName: this.walkInAppointment.hospitalName
            });
          }
        },
        error => {
          console.error("Error fetching appointment data:", error);
        }
      );
    }
  }

  loadDoctors(): void {
    this.apiService.getDoctors().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
      },
      error => {
        console.error('Error fetching doctors:', error);
      }
    );
  }


  onSubmit() {
    // Handle form submission logic here
  }
}
