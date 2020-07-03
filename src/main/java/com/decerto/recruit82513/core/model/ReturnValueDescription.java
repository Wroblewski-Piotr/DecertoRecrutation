package com.decerto.recruit82513.core.model;

import lombok.Data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

@Data
public class ReturnValueDescription {

    private final Logger logger = LoggerFactory.getLogger(ReturnValueDescription.class);

    public ReturnValueDescription(builder builder) {
        this.isHaveDefinedReturnValueType = builder.isHaveDefinedReturnValueType;
        this.isHaveDefinedNumberOfReturnValues = builder.isHaveDefinedNumberOfReturnValues;
        this.numberOfReturnValues = builder.numberOfReturnValues;
        this.returnValueType = builder.returnValueType;

        validateBuildedObject();
    }

    public final boolean isHaveDefinedReturnValueType;
    public final Class returnValueType;

    public final boolean isHaveDefinedNumberOfReturnValues;
    public final Integer numberOfReturnValues;

    public static class builder{

        private boolean isHaveDefinedReturnValueType;
        private Class returnValueType;

        private boolean isHaveDefinedNumberOfReturnValues;
        private Integer numberOfReturnValues;


        public builder isHaveDefinedReturnValueType(boolean isHaveDefinedReturnValueType) {
            this.isHaveDefinedReturnValueType = isHaveDefinedReturnValueType;
            return this;
        }

        public builder returnValueType(Class returnValueType) {
            this.returnValueType = returnValueType;
            return this;
        }

        public builder isHaveDefinedNumberOfReturnValues(boolean isHaveDefinedNumberOfReturnValues) {
            this.isHaveDefinedNumberOfReturnValues = isHaveDefinedNumberOfReturnValues;
            return this;
        }

        public builder numberOfReturnValues(Integer numberOfReturnValues) {
            this.numberOfReturnValues = numberOfReturnValues;
            return this;
        }

        public ReturnValueDescription build(){
            return new ReturnValueDescription(this);
        }
    }

    public void validateBuildedObject(){
        List<String> errorsList = new ArrayList<>();

        if(isHaveDefinedReturnValueType == true && returnValueType == null) {
            String errorMessage = "Brak typu zwracanych objektów";
            errorsList.add(errorMessage);
        }

        if(isHaveDefinedNumberOfReturnValues == true && numberOfReturnValues == null) {
            String errorMessage = "Brak ilości zwracanych objektów";
            errorsList.add(errorMessage);
        }

        if(!errorsList.isEmpty()) {
            errorsList.forEach(errorMessage -> logger.error(errorMessage));
            throw new IllegalStateException();
        }
    }
}
