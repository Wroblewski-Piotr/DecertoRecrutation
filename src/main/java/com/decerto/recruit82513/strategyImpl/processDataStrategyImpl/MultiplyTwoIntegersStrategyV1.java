package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.model.AcceptValueDescription;
import com.decerto.recruit82513.core.strategy.ProcessDataStrategy;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("MultiplyTwoIntegersStrategyV1")
public class MultiplyTwoIntegersStrategyV1 implements ProcessDataStrategy<Integer, Integer> {

    private final AcceptValueDescription processDataStrategyAcceptValueDescriptionModel =
            new AcceptValueDescription.builder()
                    .isHaveDefinedAcceptValueType(true)
                    .acceptValueType(Integer.class)
                    .isHaveDefinedAcceptNumberOfValues(true)
                    .acceptNumberOValues(2)
                    .build();

    @Override
    public Integer processData(List<Integer> valuesBeforeProcessing) {
        return valuesBeforeProcessing.get(0) * valuesBeforeProcessing.get(1);
    }

    @Override
    public AcceptValueDescription getProcessDataStrategyAcceptValueDescriptionModel() {
        return processDataStrategyAcceptValueDescriptionModel;
    }
}
