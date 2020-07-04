package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.model.Nothing;
import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.Strategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component("GetRandomNumberOfRandomIntegers")
public class GetRandomNumberOfRandomIntegers implements Strategy<Nothing, List<Integer>> {

    private final static Logger logger = LoggerFactory.getLogger(GetTwoIntegersFromApi.class);

    private final TypeDefinition acceptableTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(Nothing.class)
                    .build();

    private final TypeDefinition returnTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(List.class)
                    .addGenericParameter(
                            new TypeDefinition.builder()
                                    .clazz(Integer.class)
                                    .build()
                    )
                    .build();

    private final String description = "Tworzy listę Integerów o losowej długości, wypełnioną losowymi danymi";

    @Override
    public List<Integer> processData(Nothing nothing) {

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
    public String getStrategyDescription() { return description; }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() {
        return acceptableTypeDefinition;
    }

    @Override
    public TypeDefinition getReturnTypeDefinition() {
        return returnTypeDefinition;
    }
}
