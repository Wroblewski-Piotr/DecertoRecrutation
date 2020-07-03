package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.strategy.ProcessDataStrategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("AddAnyNumberOfIntegersStrategyV1")
public class AddAnyNumberOfIntegersStrategyV1 implements ProcessDataStrategy<List<Integer>, Integer> {

    private final static Logger logger = LoggerFactory.getLogger(AddAnyNumberOfIntegersStrategyV1.class);

    TypeDefinition acceptableTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(List.class)
                    .addGenericParameter(
                            new TypeDefinition.builder()
                                    .clazz(Integer.class)
                                    .build()
                    )
                    .build();

    @Override
    public Integer processData(List<Integer> dataBeforeProcessing) {

        logger.info("Wywołanie " + this.getClass().getSimpleName());
        logger.info("przyjęte dane - " + dataBeforeProcessing.toString());

        Integer score = 0;
        for(Integer integer: dataBeforeProcessing) {
            score = score + integer;
        }

        logger.info("Wygenerowany objekt - " + score.toString());
        logger.info("-----------------------------------------");

        return score;
    }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() {
        return acceptableTypeDefinition;
    }
}
