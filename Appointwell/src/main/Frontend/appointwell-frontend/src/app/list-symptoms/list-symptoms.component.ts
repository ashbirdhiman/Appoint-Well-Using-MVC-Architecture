import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../Service/appointment.service';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import {FormsModule} from "@angular/forms";

export interface Symptom {
  id: number;
  name: string;
  severity: string;
}

@Component({
  selector: 'app-list-symptoms',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './list-symptoms.component.html',
  styleUrls: ['./list-symptoms.component.css']
})
export class ListSymptomsComponent implements OnInit {
  symptoms: Symptom[] = [
    { id: 1, name: 'Fever', severity: 'Low' },
    { id: 2, name: 'Cough', severity: 'Low' },
    { id: 3, name: 'Headache', severity: 'Low' },
    { id: 4, name: 'Sore Throat', severity: 'Low' },
    { id: 5, name: 'Fatigue', severity: 'Low' },
    { id: 6, name: 'Muscle Aches', severity: 'Low' },
    { id: 7, name: 'Shortness of Breath', severity: 'Low' },
    { id: 8, name: 'Nausea or Vomiting', severity: 'Low' },
    { id: 9, name: 'Diarrhea', severity: 'Low' },
    { id: 10, name: 'Loss of Taste or Smell', severity: 'Low' }
  ];

  selectedSymptoms: Symptom[] = [];
  customSymptomName: string = '';
  customSymptomSeverity: string = 'Low';

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {}

  onCheckboxChange(event: any, symptom: Symptom) {
    if (event.target.checked) {
      this.selectedSymptoms.push(symptom);
    } else {
      this.selectedSymptoms = this.selectedSymptoms.filter(s => s.id !== symptom.id);
    }
  }

  onSeverityChange(symptom: Symptom, severity: string) {
    const foundSymptom = this.selectedSymptoms.find(s => s.id === symptom.id);
    if (foundSymptom) {
      foundSymptom.severity = severity;
    }
  }

  addCustomSymptom() {
    if (this.customSymptomName.trim()) {
      const newSymptom: Symptom = {
        id: this.symptoms.length + 1,
        name: this.customSymptomName,
        severity: this.customSymptomSeverity
      };
      this.symptoms.push(newSymptom);
      this.customSymptomName = '';
      this.customSymptomSeverity = 'Low';
    }
  }

  nextStep() {
    this.appointmentService.setSymptoms(this.selectedSymptoms);

    if (this.appointmentService.getAppointmentType() === "walk-in") {
      this.router.navigate(['/select-date-time']);
    } else {
      this.router.navigate(['/select-doctor']);
    }
  }
}
