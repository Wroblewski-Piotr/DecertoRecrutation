package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.strategy.ProcessDataStrategy;
import com.decerto.recruit82513.model.Pair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component("MultiplyTwoIntegersStrategyV1")
public class MultiplyTwoIntegersStrategyV1 implements ProcessDataStrategy<Pair<Integer>, Integer> {

    private final static Logger logger = LoggerFactory.getLogger(MultiplyTwoIntegersStrategyV1.class);

    TypeDefinition acceptableTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(Pair.class)
                    .addGenericParameter(
                            new TypeDefinition.builder()
                                    .clazz(Integer.class)
                                    .build()
                    )
                    .build();

    @Override
    public Integer processData(Pair<Integer> integerPair) {

        logger.info("Wywołanie " + this.getClass().getSimpleName());
        logger.info("przyjęte dane - " + integerPair.toString());

        Integer score = integerPair.getVar1() * integerPair.getVar2();

        logger.info("Wygenerowany objekt - " + score.toString());
        logger.info("-----------------------------------------");

        return score;
    }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() {
        return acceptableTypeDefinition;
    }
}
