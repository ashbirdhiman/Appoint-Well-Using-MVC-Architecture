package com.appointwell.Wrapper;

import com.appointwell.POJO.Doctor;
import com.appointwell.POJO.Hospital;

import javax.print.Doc;

public class DTOTransformer {

    public static DoctorWrapper toDoctorDTO(Doctor doctor) {
        DoctorWrapper doctorDTO = new DoctorWrapper(doctor.getId()
                ,doctor.getName(),doctor.getSpecialization(), doctor.getStatus());

        return doctorDTO;
    }

    public static HospitalWrapper toHospitalDTO(Hospital hospital) {
        HospitalWrapper hospitalDTO = new HospitalWrapper(hospital);


        return hospitalDTO;
    }
//
//    public static DoctorBasicDTO toDoctorBasicDTO(Doctor doctor) {
//        DoctorBasicDTO doctorBasicDTO = new DoctorBasicDTO();
//        doctorBasicDTO.setId(doctor.getId());
//        doctorBasicDTO.setName(doctor.getName());
//        doctorBasicDTO.setSpecialization(doctor.getSpecialization());
//        return doctorBasicDTO;
//    }
}
