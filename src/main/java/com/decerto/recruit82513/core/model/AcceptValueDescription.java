package com.decerto.recruit82513.core.model;

import lombok.Data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

@Data
public class AcceptValueDescription {

    private final Logger logger = LoggerFactory.getLogger(AcceptValueDescription.class);

    public AcceptValueDescription(builder builder) {
        this.isHaveDefinedAcceptValueType = builder.isHaveDefinedAcceptValueType;
        this.isHaveDefinedAcceptNumberOfValues = builder.isHaveDefinedAcceptNumberOfValues;
        this.acceptNumberOValues = builder.acceptNumberOValues;
        this.acceptValueType = builder.acceptValueType;

        validateBuildedObject();
    }

    public final boolean isHaveDefinedAcceptValueType;
    public final Class acceptValueType;

    public final boolean isHaveDefinedAcceptNumberOfValues;
    public final Integer acceptNumberOValues;

    public static class builder{

        private boolean isHaveDefinedAcceptValueType;
        private Class acceptValueType;

        private boolean isHaveDefinedAcceptNumberOfValues;
        private Integer acceptNumberOValues;


        public builder isHaveDefinedAcceptValueType(boolean isHaveDefinedAcceptValueType) {
            this.isHaveDefinedAcceptValueType = isHaveDefinedAcceptValueType;
            return this;
        }

        public builder acceptValueType(Class acceptValueType) {
            this.acceptValueType = acceptValueType;
            return this;
        }

        public builder isHaveDefinedAcceptNumberOfValues(boolean isHaveDefinedAcceptNumberOfValues) {
            this.isHaveDefinedAcceptNumberOfValues = isHaveDefinedAcceptNumberOfValues;
            return this;
        }

        public builder acceptNumberOValues(Integer acceptNumberOValues) {
            this.acceptNumberOValues = acceptNumberOValues;
            return this;
        }

        public AcceptValueDescription build(){
            return new AcceptValueDescription(this);
        }
    }

    public void validateBuildedObject(){
        List<String> errorsList = new ArrayList<>();

        if(isHaveDefinedAcceptValueType == true && acceptValueType == null) {
            String errorMessage = "Brak typu akceptowalnego objektów";
            errorsList.add(errorMessage);
        }

        if(isHaveDefinedAcceptNumberOfValues == true && acceptNumberOValues == null) {
            String errorMessage = "Brak dopuszczalnej ilości akceptowalnych objektów";
            errorsList.add(errorMessage);
        }

        if(!errorsList.isEmpty()) {
            errorsList.forEach(errorMessage -> logger.error(errorMessage));
            throw new IllegalStateException();
        }
    }
}
