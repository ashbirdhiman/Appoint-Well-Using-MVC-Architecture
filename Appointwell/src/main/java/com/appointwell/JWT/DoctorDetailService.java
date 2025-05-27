//package com.appointwell.JWT;
//
//import com.appointwell.DAO.DoctorDAO;
//import com.appointwell.DAO.PatientDAO;
//import com.appointwell.POJO.Doctor;
//import com.appointwell.POJO.Patient;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import javax.print.Doc;
//import java.util.ArrayList;
//import java.util.Objects;
//
//@Slf4j
//@Service
//public class DoctorDetailService implements UserDetailsService {
//
//    @Autowired
//    DoctorDAO doctorDAO;
//
//    Doctor doctor;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
//        log.info("Loading Username {}",username);
//        doctor =doctorDAO.findDoctorByEmail(username);
//        if(!Objects.isNull(doctor)){
//            return new org.springframework.security.core.
//                    userdetails.User(doctor.getEmail(), doctor.getPassword(),new ArrayList<>());
//        }
//        else throw new UsernameNotFoundException("User Not found");
//    }
////    public Doctor getDoctor(){
////        return doctor;
////    }
//}
