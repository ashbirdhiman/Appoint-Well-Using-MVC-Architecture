package com.appointwell.Services;

import com.appointwell.DAO.AdminDAO;
import com.appointwell.DAO.DoctorDAO;
import com.appointwell.DAO.HospitalDAO;
import com.appointwell.POJO.Admin;
import com.appointwell.POJO.Doctor;
import com.appointwell.POJO.Hospital;
import com.appointwell.Wrapper.DTOTransformer;
import com.appointwell.Wrapper.DoctorWrapper;
import com.appointwell.Wrapper.HospitalWrapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    private AdminDAO adminDAO;

    @Autowired
    HospitalDAO hospitalDAO;

    @Autowired
    DoctorDAO doctorDAO;
    // Add a new hospital


    public ResponseEntity<String> addHospital(Hospital hospital) {
        hospitalDAO.save(hospital);
        return new ResponseEntity<>("{\"message\":\"Login Successful\"}", HttpStatus.OK);
    }

        public String addDoctor(Doctor doctor) {


            Hospital hospital = hospitalDAO.findById(doctor.getHospital().getId())
                    .orElseThrow(() -> new RuntimeException("Hospital not found"));

            // Set the hospital reference in the doctor
            doctor.setHospital(hospital);

            // Save the doctor with the hospital association
            doctorDAO.save(doctor);
            return "";
        }

    // Admin login logic
    public ResponseEntity<String> adminLogin(String email, String password) {
        Admin admin = adminDAO.findByEmail(email);

//        JSONObject response = new JSONObject();

        if (admin == null) {
//            response.put("message", "Admin not found!");
            return new ResponseEntity<>("{\"message\":\"Invalid credentials\"}", HttpStatus.UNAUTHORIZED);
        }

        if (!admin.getPassword().equals(password)) {  // Replace with password hashing for production
//            response.put("message", "Incorrect password!");
            return new ResponseEntity<>("{\"message\":\"Invalid credentials\"}", HttpStatus.UNAUTHORIZED);
        }


        return new ResponseEntity<>("{\"message\":\"Login Successful\"}", HttpStatus.OK);
    }

    // View all hospitals
    public List<HospitalWrapper> getHospitals() {

        List<Hospital> hospitals=hospitalDAO.findAll();
        return hospitals.stream()
                .map(DTOTransformer::toHospitalDTO)
                .toList();
    }

    public List<DoctorWrapper> getDoctors() {

        List<Doctor> hospitals=doctorDAO.findAll();
        return hospitals.stream()
                .map(DTOTransformer::toDoctorDTO)
                .toList();
    }

    // Assign doctor to hospital
    public String assignDoctorToHospital(int doctorId, int hospitalId) {
        Hospital hospital = hospitalDAO.findById(hospitalId).orElse(null);
        Doctor doctor = doctorDAO.findById(doctorId).orElse(null);

        if (hospital == null || doctor == null) {
            return "Hospital or Doctor not found!";
        }

        doctor.setHospital(hospital);
        doctorDAO.save(doctor);
        return "Doctor assigned to hospital successfully!";
    }
}
