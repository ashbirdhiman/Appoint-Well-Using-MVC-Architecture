// src/app/models/walk-in-appointment.model.ts

export interface WalkInAppointment {
  id: number;             // Unique ID for the appointment
  patientId: number;     // The patient ID
  hospitalId: number;    // The hospital ID
  doctorId: number;      // The doctor ID
  oldTimeSlot: string;   // The old time slot before any update (in ISO format)
  updatedTimeSlot: string;  // The updated time slot (in ISO format)
  status: string;        // Appointment status (e.g., "Pending", "Confirmed", "Cancelled")
  patientName: string;   // The name of the patient (can be fetched from the related Patient entity)
  hospitalName: string;  // The name of the hospital (can be fetched from the related Hospital entity)
  doctorName: string;    // The name of the doctor (can be fetched from the related Doctor entity)
}
