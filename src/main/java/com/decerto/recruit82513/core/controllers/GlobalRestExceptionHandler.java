package com.decerto.recruit82513.core.controllers;

import com.decerto.recruit82513.core.Exception.Recruit82513Exception;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Component
public class GlobalRestExceptionHandler {

    @ExceptionHandler(Recruit82513Exception.class)
    public ResponseEntity handleRecruit82513Exception(Recruit82513Exception recruit82513Exception) {

        int errorStatus = recruit82513Exception.getResponseStatus();
        Object responseBody = recruit82513Exception.getResponseBody();

        return ResponseEntity.status(errorStatus).body(responseBody);
    }
}
