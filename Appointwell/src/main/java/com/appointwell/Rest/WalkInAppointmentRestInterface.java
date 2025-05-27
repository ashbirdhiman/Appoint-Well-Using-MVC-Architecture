package com.appointwell.Rest;

import com.appointwell.POJO.WalkInAppointment;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface WalkInAppointmentRestInterface {

    ResponseEntity<String> bookWalkInAppointment(Map<String, String> requestMapping);

    ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByPatient(int patientId);

    ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByDoctor(int doctorId);

    ResponseEntity<List<WalkInAppointment>> getWalkInAppointmentsByHospital(int hospitalId);

    ResponseEntity<String> cancelWalkInAppointment(Map<String, String> requestMapping);
}
