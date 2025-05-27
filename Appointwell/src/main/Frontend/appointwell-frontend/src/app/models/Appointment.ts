// src/app/models/appointment.model.ts
export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  hospitalName: string;
  date: string; // ISO date string format for easier serialization
  status: string; // e.g., "pending", "confirmed", "completed"
  paymentStatus: string; // e.g., "paid", "unpaid"
  appointmentType: string; // "online" or "offline"
  symptoms: Symptom[]; // Assuming Symptom is another interface/model
  patient: Patient; // Assuming Patient is another interface/model
}

// Define interfaces for related objects if not already defined

export interface Symptom {
  id: number;
  name: string;
  severity:string;
}

export interface Patient {
  id: number;
  name: string;
  age: number;
  contactNumber: string;
  // Add other relevant fields as per your Patient model
}
