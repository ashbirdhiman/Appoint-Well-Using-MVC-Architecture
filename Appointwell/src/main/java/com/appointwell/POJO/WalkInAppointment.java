package com.appointwell.POJO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.http.ResponseEntity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@org.hibernate.annotations.NamedQuery(name = "WalkInAppointment.findByPatientIdAndHospital", 
                                      query = "SELECT w FROM WalkInAppointment w WHERE w.patientId=:patientId AND w.hospitalId=:hospitalId")
@org.hibernate.annotations.NamedQuery(name = "WalkInAppointment.updateStatus", 
                                      query = "UPDATE WalkInAppointment w SET w.status=:status WHERE w.id=:id")

@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "walk_in_appointment")
public  class WalkInAppointment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;  // Unique ID for the appointment

    @Column(name = "patient_id")
    private Long patientId;  // The patient ID

    @Column(name = "hospital_id")
    private Long hospitalId;  // The hospital ID

    @Column(name = "doctor_id")
    private Long doctorId;  // The doctor ID

    @Column(name = "old_time_slot")
    private LocalDateTime oldTimeSlot;  // The old time slot before any update

    @Column(name = "updated_time_slot")
    private LocalDateTime updatedTimeSlot;  // The updated time slot

    @Column(name = "status")
    private String status;  // Appointment status (e.g., "Pending", "Confirmed", "Cancelled")

    // Relations with other entities
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonIgnore // Prevent recursion when serializing to JSON
    private Patient patient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hospital_id", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonIgnore  // Prevent recursion when serializing to JSON
    private Hospital hospital;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonIgnore  // Prevent recursion when serializing to JSON
    private Doctor doctor;


}
