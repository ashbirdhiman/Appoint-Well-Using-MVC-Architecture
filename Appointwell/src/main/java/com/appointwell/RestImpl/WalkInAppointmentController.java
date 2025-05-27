package com.appointwell.RestImpl;

import com.appointwell.POJO.WalkInAppointment;
import com.appointwell.Rest.WalkInAppointmentRestInterface;
import com.appointwell.Services.WalkInAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/walk-in-appointments")
public class WalkInAppointmentController implements WalkInAppointmentRestInterface {

    @Autowired
    private WalkInAppointmentService walkInAppointmentService;

    // Endpoint to book a walk-in appointment
    @PostMapping("/book")
    public ResponseEntity<String> bookWalkInAppointment(@RequestBody Map<String, String> requestMapping) {
        try {
            return walkInAppointmentService.bookWalkInAppointment(requestMapping);
        } catch (Exception e) {
            // Log the exception (you can use a logging framework like SLF4J)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error booking appointment: " + e.getMessage());
        }
    }

    @GetMapping("/getAppointById/{appointmentID}")
    public ResponseEntity<WalkInAppointment> getAppointById(@PathVariable int appointmentID) {
        try {
            return walkInAppointmentService.getAppointById(appointmentID);
        } catch (Exception e) {
            // Log the exception (you can use a logging framework like SLF4J)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Endpoint to get walk-in appointments by patient ID
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByPatient(@PathVariable int patientId) {
        try {
            return walkInAppointmentService.getWalkInAppointmentsByPatient(patientId);
        } catch (Exception e) {
            // Log the exception (you can use a logging framework like SLF4J)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Endpoint to get walk-in appointments by doctor ID
    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByDoctor(@PathVariable int doctorId) {
        try {
            return walkInAppointmentService.getWalkInAppointmentsByDoctor(doctorId);
        } catch (Exception e) {
            // Log the exception (you can use a logging framework like SLF4J)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Endpoint to get walk-in appointments by hospital ID
    @GetMapping("/hospital/{hospitalId}")
    public ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByHospital(@PathVariable int hospitalId) {
        try {
            return walkInAppointmentService.getWalkInAppointmentsByHospital(hospitalId);
        } catch (Exception e) {
            // Log the exception (you can use a logging framework like SLF4J)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Endpoint to cancel a walk-in appointment
    @DeleteMapping("/cancel")
    public ResponseEntity<String> cancelWalkInAppointment(@RequestBody Map<String, String> requestMapping) {
        try {
            return walkInAppointmentService.cancelWalkInAppointment(requestMapping);
        } catch (Exception e) {
            // Log the exception (you can use a logging framework like SLF4J)
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error canceling appointment: " + e.getMessage());
        }
    }
}
