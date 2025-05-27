package com.appointwell.JWT;

import com.appointwell.DAO.PatientDAO;
import com.appointwell.POJO.Patient;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Objects;

@Slf4j
@Service
public class CustomerUserDetailsService implements UserDetailsService {

    @Autowired
    PatientDAO patientDAO;

    Patient patient;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        log.info("Loading Username {}",username);
        patient =patientDAO.findPatientByEmail(username);
        if(!Objects.isNull(patient)){
            return new org.springframework.security.core.
                    userdetails.User(patient.getEmail(), patient.getPassword(),new ArrayList<>());
        }
        else throw new UsernameNotFoundException("User Not found");
    }
    public Patient getUserDetails(){
        return patient;
    }
}
