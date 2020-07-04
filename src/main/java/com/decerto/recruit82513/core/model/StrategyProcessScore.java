package com.decerto.recruit82513.core.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StrategyProcessScore {
    String strategyQualifier;
    String description;
    Object processScore;
}
