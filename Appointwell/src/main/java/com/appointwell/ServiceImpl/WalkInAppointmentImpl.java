package com.appointwell.ServiceImpl;

import com.appointwell.DAO.WalkInAppointmentRepository;
import com.appointwell.POJO.WalkInAppointment;
import com.appointwell.Services.WalkInAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class WalkInAppointmentImpl implements WalkInAppointmentService {

    @Autowired
    private WalkInAppointmentRepository walkInAppointmentRepository;

    @Override
    public ResponseEntity<String> bookWalkInAppointment(Map<String, String> requestMapping) {
        // Logic to book a walk-in appointment
        return ResponseEntity.ok("Walk-in Appointment booked successfully");
    }

    @Override
    public ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByPatient(int patientID) {
        // Fetching appointments by patient ID
        return ResponseEntity.ok(walkInAppointmentRepository.findWalkInAppointmentsByPatient(patientID));
    }

    @Override
    public ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByDoctor(int doctorID) {
        // Fetching appointments by doctor ID
        return ResponseEntity.ok(walkInAppointmentRepository.findWalkInAppointmentsByDoctor(doctorID));
    }

    @Override
    public ResponseEntity<List<WalkInAppointment>> getAllWalkInAppointments() {
        // Fetching all walk-in appointments
        return ResponseEntity.ok(walkInAppointmentRepository.findAll());
    }

    @Override
    public ResponseEntity<String> cancelWalkInAppointment(Map<String, String> requestMapping) {
        // Logic to cancel a walk-in appointment
        return ResponseEntity.ok("Walk-in Appointment cancelled");
    }

    @Override
    public ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByHospital(int hospitalID) {
        // Fetching walk-in appointments by hospital ID
        List<WalkInAppointment> appointments = walkInAppointmentRepository.findWalkInAppointmentsByHospital(hospitalID);
        return ResponseEntity.ok(appointments);
    }

    @Override
    public ResponseEntity<WalkInAppointment> getAppointById(int appointmentID) {

        return ResponseEntity.ok(walkInAppointmentRepository.findWalkInAppointmentById(appointmentID));

    }
}
