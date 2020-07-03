package com.decerto.recruit82513.controllers;

import com.decerto.recruit82513.core.dto.ResponseObjectDTO;
import com.decerto.recruit82513.service.GetAndProcessDataService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("process")
@AllArgsConstructor
public class GetScoreDataController {

    GetAndProcessDataService getAndProcessDataService;

    @GetMapping
    public ResponseEntity<ResponseObjectDTO> process(@RequestParam String getDataStrategy, @RequestParam String processDataStrategy ) {

        ResponseObjectDTO responseObjectDTO = getAndProcessDataService.getAndProcessData(getDataStrategy, processDataStrategy);

        return ResponseEntity.ok().body(responseObjectDTO);
    }
}
