package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.strategy.GetDataStrategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component("GetAnyNumberOfRandomIntegersStrategyV1")
public class GetAnyNumberOfRandomIntegersStrategyV1 implements GetDataStrategy<List<Integer>> {

    private final static Logger logger = LoggerFactory.getLogger(GetTwoIntegersFromApiStrategyV1.class);

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
    public List<Integer> getData() {

        logger.info("-----------------------------------------");
        logger.info("Wywołanie " + this.getClass().getSimpleName());

        Random generator = new Random();
        int numberOfIntegers = generator.nextInt(25);

        List<Integer> score = new ArrayList<>();

        int min=0;
        int max=100;

        for(int i=0; i<numberOfIntegers; i++) {
            score.add(generator.nextInt(max - min) + min);
        }

        logger.info("Wygenerowany objekt - " + score.toString());

        return score;
    }

    @Override
    public TypeDefinition getReturnTypeDefinition() {
        return acceptableTypeDefinition;
    }
}
