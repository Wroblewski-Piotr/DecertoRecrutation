package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.Strategy;
import com.decerto.recruit82513.core.adnotations.LogableProcessDataStrategyImpl;
import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
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
    @LogableProcessDataStrategyImpl
    public String processData(String dataBeforeProcessing) {

        String score = dataBeforeProcessing.substring(0, 1);

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