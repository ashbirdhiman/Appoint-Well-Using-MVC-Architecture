package com.appointwell.Wrapper;

import com.appointwell.POJO.Doctor;
import com.appointwell.POJO.Hospital;
import lombok.Data;
import java.util.List;

@Data
public class HospitalWrapper {

    private int id;
    private String name;
    private double latitude;
    private double longitude;
    private String address;
    private int waitTime;

    // Optionally, include minimal doctor information (like name) or count of doctors if needed
    private List<String> doctorNames;
    private int doctorCount;

    // Constructor to initialize wrapper from a Hospital entity
    public HospitalWrapper(Hospital hospital) {
        this.id = hospital.getId();
        this.name = hospital.getName();
        this.latitude = hospital.getLatitude();
        this.longitude = hospital.getLongitude();
        this.address = hospital.getAddress();
        this.waitTime = hospital.getWaitTime();

        // Map doctor names (or get a count, as needed)
        this.doctorNames = hospital.getDoctors().stream().map(Doctor::getName).toList();
        this.doctorCount = hospital.getDoctors().size();
    }
}
