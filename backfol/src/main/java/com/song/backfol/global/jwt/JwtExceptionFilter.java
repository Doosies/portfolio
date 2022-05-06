package com.song.backfol.global.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.JwtException;


@Component
public class JwtExceptionFilter extends OncePerRequestFilter{

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // JwtFilter에 문제가 있으면 여기로 넘어온다
        try {
            filterChain.doFilter(request,response); // go to 'JwtFilter'
        }catch (JwtException ex) {
            // setErrorResponse(HttpStatus.UNAUTHORIZED, response, ex);
        }
        
    }

    
    
}
