package com.appointwell.JWT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Autowired
    @Lazy
    private CustomerUserDetailsService customerUserDetailsService;
//
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Autowired
    public SecurityConfig(CustomerUserDetailsService customerUserDetailsService ) {
        this.customerUserDetailsService = customerUserDetailsService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(
                                // Admin endpoints
                                "/admin/addHospital","/admin/addDoctor", "/admin/assignDoctor", "/admin/login", "/admin/viewHospitals",
                                // Patient endpoints
                                "/patient/all", "/patient/changePassword", "/patient/email/{email}", "/patient/getAll",
                                "/patient/getByEmail/{email}", "/patient/getById/{id}", "/patient/id/{id}", "/patient/login",
                                "/patient/signup",
                                // Hospital endpoints
                                "/hospitals/add","/hospitals/login", "/hospitals/getAll", "/hospitals/getByLocation", "/hospitals/getByName",
                                "/hospitals/getDoctorsByHospital/{hospitalID}", "/hospitals/getHospitalByName", "/hospitals/getHospitalsByLocation",
                                // Doctor endpoints
                                "/doctor/addAvailability", "/doctor/changePassword", "/doctor/getAll", "/doctor/getAvailableDoctor",
                                "/doctor/getBySpecialization/{specialization}", "/doctor/login", "/doctor/signup", "/doctor/update",
                                // Symptom endpoints
                                "/symptom/add", "/symptom/getAll", "/symptom/getByName", "/symptom/getByPatientID/{patientID}",
                                // Appointment endpoints
                                "/appointment/book", "/appointment/cancel", "/appointment/getAll", "/appointment/getByDoctor/{doctorID}",
                                "/appointment/getByPatient/{patientID}",
                                "/walk-in-appointments/book","/walk-in-appointments/patient/{patientId}", "/walk-in-appointments/doctor/{doctorId}",
                                "/walk-in-appointments/hospital/{hospitalId}","/walk-in-appointments/cancel","/walk-in-appointments/getAppointById/{appointmentID}")

                        .permitAll()
                        .anyRequest().authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}
