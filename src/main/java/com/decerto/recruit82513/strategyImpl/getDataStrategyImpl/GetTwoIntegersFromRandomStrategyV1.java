package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.strategy.GetDataStrategy;
import com.decerto.recruit82513.model.Pair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component("GetTwoIntegersFromRandomStrategyV1")
public class GetTwoIntegersFromRandomStrategyV1 implements GetDataStrategy<Pair<Integer>> {

    private final static Logger logger = LoggerFactory.getLogger(GetTwoIntegersFromRandomStrategyV1.class);

    TypeDefinition returnTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(Pair.class)
                    .addGenericParameter(
                            new TypeDefinition.builder()
                                    .clazz(Integer.class)
                                    .build()
                    )
                    .build();

    @Override
    public Pair<Integer> getData() {

        logger.info("-----------------------------------------");
        logger.info("Wywołanie " + this.getClass().getSimpleName());

        Random generator = new Random();
        int min=0;
        int max=100;

        int var1 = generator.nextInt(max - min) + min;
        int var2 = generator.nextInt(max - min) + min;

        Pair<Integer> score = new Pair(var1, var2);

        logger.info("Wygenerowany objekt - " + score.toString());

        return score;
    }

    @Override
    public TypeDefinition getReturnTypeDefinition() {
        return returnTypeDefinition;
    }
}
