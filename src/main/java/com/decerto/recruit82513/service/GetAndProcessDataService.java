package com.decerto.recruit82513.service;

import com.decerto.recruit82513.core.dto.ResponseObjectDTO;

public interface GetAndProcessDataService {

    ResponseObjectDTO getAndProcessData(String getDataStrategy, String processDataStrategy);
}
