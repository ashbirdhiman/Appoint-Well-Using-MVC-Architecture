package com.appointwell.DAO;

import com.appointwell.POJO.WalkInAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WalkInAppointmentRepository extends JpaRepository<WalkInAppointment, Long> {

    // Fetching walk-in appointments by patient ID
    @Query("select a from WalkInAppointment a where a.patientId=:patientId")
    List<WalkInAppointment> findWalkInAppointmentsByPatient(int patientId);

    // Fetching walk-in appointments by doctor ID
    @Query("select a from WalkInAppointment a where a.doctorId=:doctorId")
    List<WalkInAppointment> findWalkInAppointmentsByDoctor(int doctorId);

    @Query("select a from WalkInAppointment a where a.hospitalId=:hospitalId")
    List<WalkInAppointment> findWalkInAppointmentsByHospital(int hospitalId);
    @Query("select a from WalkInAppointment a where a.id=:id")
    WalkInAppointment findWalkInAppointmentById(int id);

}
