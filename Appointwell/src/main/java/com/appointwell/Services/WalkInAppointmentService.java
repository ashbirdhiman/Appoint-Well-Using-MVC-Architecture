package com.appointwell.Services;

import com.appointwell.POJO.WalkInAppointment;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface WalkInAppointmentService {


    public abstract ResponseEntity<String> bookWalkInAppointment(Map<String, String> requestMapping);

    public abstract ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByPatient(int patientID);

    public abstract ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByDoctor(int doctorID);

    public abstract ResponseEntity<List<WalkInAppointment>> getAllWalkInAppointments();

    public abstract ResponseEntity<String> cancelWalkInAppointment(Map<String, String> requestMapping);

    public abstract ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByHospital(int hospitalID);

    public abstract ResponseEntity<WalkInAppointment> getAppointById(int appointmentID);
}
