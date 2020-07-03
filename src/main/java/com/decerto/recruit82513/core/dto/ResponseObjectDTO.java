package com.decerto.recruit82513.core.dto;

import lombok.Data;

@Data
public class ResponseObjectDTO {

    public ResponseObjectDTO(String getDataStrategy, String processDataStrategy, Object dataBeforeProcess, Object dataAfterProcess){
        this.dataAfterProcess = dataAfterProcess;
        this.dataBeforeProcess = dataBeforeProcess;
        this.getDataStrategy = getDataStrategy;
        this.processDataStrategy = processDataStrategy;
    }

    private String getDataStrategy;
    private String processDataStrategy;
    private Object dataBeforeProcess;
    private Object dataAfterProcess;

}
