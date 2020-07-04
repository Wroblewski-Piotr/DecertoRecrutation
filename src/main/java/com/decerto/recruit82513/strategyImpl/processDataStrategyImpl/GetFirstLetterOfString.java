package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.Strategy;
import com.decerto.recruit82513.core.model.TypeDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component("GetFirstLetterOfString")
public class GetFirstLetterOfString implements Strategy<String, String> {

    private final static Logger logger = LoggerFactory.getLogger(AddAnyNumberOfIntegers.class);

    private final TypeDefinition acceptableTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(String.class)
                    .build();

    private final TypeDefinition returnTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(String.class)
                    .build();

    private final String description = "Z objektu typu String pobiera pierwszy znak";

    @Override
    public String processData(String dataBeforeProcessing) {

        logger.info("Wywołanie " + this.getClass().getSimpleName());
        logger.info("przyjęte dane - " + dataBeforeProcessing);

        String score = dataBeforeProcessing.substring(0, 1);

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