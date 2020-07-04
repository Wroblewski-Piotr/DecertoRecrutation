package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.Strategy;
import com.decerto.recruit82513.core.model.TypeDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component("ConvertIntegerToString")
public class ConvertIntegerToString implements Strategy<Integer, String> {

    private final static Logger logger = LoggerFactory.getLogger(AddAnyNumberOfIntegers.class);

    private final TypeDefinition acceptableTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(Integer.class)
                    .build();

    private final TypeDefinition returnTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(String.class)
                    .build();

    private final String description = "Konwertuje objekt typu Integer na objekt typu String";

    @Override
    public String processData(Integer dataBeforeProcessing) {

        logger.info("Wywołanie " + this.getClass().getSimpleName());
        logger.info("przyjęte dane - " + dataBeforeProcessing.toString());

        String score = dataBeforeProcessing.toString();

        logger.info("Wygenerowany objekt - " + score);

        return score;
    }

    @Override
    public String getStrategyDescription() {
        return description;
    }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() {
        return acceptableTypeDefinition;
    }

    @Override
    public TypeDefinition getReturnTypeDefinition() {
        return returnTypeDefinition;
    }
}
