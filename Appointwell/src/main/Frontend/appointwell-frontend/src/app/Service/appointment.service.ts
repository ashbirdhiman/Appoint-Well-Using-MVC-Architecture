import { Injectable } from '@angular/core';
import {Hospital} from "../models/Hospital";
import {Doctor} from "../models/Doctor";
import {Symptom} from "../models/Appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  // @ts-ignore
  private hospital: Hospital = new Hospital();

  private symptoms: Symptom[] = [];
  private dateTime: { date: string, time: string } = { date: '', time: '' };
  private specialization: string = '';
  // @ts-ignore
  private doctor: Doctor = new Doctor();

  private _appointmentType:string="";


  getAppointmentType(): string {
    return this._appointmentType;
  }

   setAppointmentType(value: string) {
    this._appointmentType = value;
  }

  setHospital(hospital: Hospital) {
    this.hospital = hospital;
  }

  getHospital(): Hospital {
    return this.hospital;
  }

  setSymptoms(symptoms: Symptom[]) {
    this.symptoms = symptoms;
  }

  getSymptoms(): Symptom[] {
    return this.symptoms;
  }

  setDateTime(date: string, time: string) {
    this.dateTime = { date, time };
  }

  getDateTime(): { date: string, time: string } {
    return this.dateTime;
  }

  setSpecialization(specialization: string) {
    this.specialization = specialization;
  }

  getSpecialization(): string {
    return this.specialization;
  }

  setDoctor(doctor: Doctor) {
    this.doctor = doctor;
  }

  getDoctor(): Doctor {
    return this.doctor;
  }
}
