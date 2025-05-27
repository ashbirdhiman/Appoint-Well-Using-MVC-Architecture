package com.appointwell.JWT;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


import java.io.IOException;

@Component
@Slf4j
public class JwtFilter extends OncePerRequestFilter {


    @Autowired
    JwtUtils utils;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;

    Claims claims=null;
    private String userName=null;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        if (httpServletRequest.getServletPath().matches("/patient/signup | /patient/login| /patient/forgotpassword |/admin/login ")){
                filterChain.doFilter(httpServletRequest,httpServletResponse);
        }
        else {
            String authorizationHeaders=httpServletRequest.getHeader("Authorization");
            String token=null;
            log.info("Link path :{}",httpServletRequest.getServletPath());
            if(authorizationHeaders!=null&& authorizationHeaders.startsWith("Bearer ")){
                token=authorizationHeaders.substring(7);
                userName=utils.extractUsername(token);
                claims=utils.extractAllClaims(token);

            }
            if (userName!=null && SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails userDetails=customerUserDetailsService.loadUserByUsername(userName);
                if(utils.validateToken(userName,userDetails)){
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=
                            new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

                }
            }
            filterChain.doFilter(httpServletRequest,httpServletResponse);
        }

    }
    public Boolean isAdmin(){
        return "admin".equalsIgnoreCase((String) claims.get("role")) ;
    }
    public Boolean isUser(){
        return "user".equalsIgnoreCase((String) claims.get("role"));
    }

    public String getCurrentUser(){
        return  userName;
    }


}
