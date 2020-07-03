package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.model.ReturnValueDescription;
import com.decerto.recruit82513.core.strategy.GetDataStrategy;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;
import java.util.Random;

@Component("GetTwoIntegersFromApiStrategyV1")
public class GetTwoIntegersFromApiStrategyV1 implements GetDataStrategy<Integer> {

    private final ReturnValueDescription getDataStrategyReturnValueDescriptionModel =
            new ReturnValueDescription.builder()
                    .isHaveDefinedNumberOfReturnValues(true)
                    .numberOfReturnValues(2)
                    .isHaveDefinedReturnValueType(true)
                    .returnValueType(Integer.class)
                    .build();

    @Override
    public List<Integer> getData() {

        List<Integer> randomIntegersList = new LinkedList<>();

        Random generator = new Random();
        int min=0;
        int max=100;

        randomIntegersList.add(generator.nextInt(max - min) + min);
        randomIntegersList.add(generator.nextInt(max - min) + min);

        return randomIntegersList;
    }

    @Override
    public ReturnValueDescription getDataStrategyReturnValueDescriptionModel() {
        return getDataStrategyReturnValueDescriptionModel;
    }
}
