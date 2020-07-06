package com.decerto.recruit82513.core.modelAndDTO;

import com.decerto.recruit82513.core.Strategy;
import lombok.Data;

@Data
public class StrategyDTO {

    public StrategyDTO(Strategy strategy){
        this.qualifier =  strategy.getStrategyQualifier();
        this.description = strategy.getStrategyDescription();
    }

    private String qualifier;
    private String description;

}
