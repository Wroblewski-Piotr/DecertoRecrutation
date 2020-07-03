package com.decerto.recruit82513.core.dto;

import lombok.Data;

import java.util.List;

@Data
public class ResponseObjectDTO {

    public ResponseObjectDTO(String getDataStrategy, String processDataStrategy, List<Object> dataBeforeProcess, Object dataAfterProcess){
        this.dataAfterProcess = dataAfterProcess;
        this.dataBeforeProcess = dataBeforeProcess;
        this.getDataStrategy = getDataStrategy;
        this.processDataStrategy = processDataStrategy;
    }

    private String getDataStrategy;
    private String processDataStrategy;
    private List<Object> dataBeforeProcess;
    private Object dataAfterProcess;

}
