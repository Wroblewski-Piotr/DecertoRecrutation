package com.decerto.recruit82513.strategyImpl.processDataStrategyImpl;

import com.decerto.recruit82513.core.adnotations.LogableProcessDataStrategyImpl;
import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
import com.decerto.recruit82513.core.Strategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("AddAnyNumberOfIntegers")
public class AddAnyNumberOfIntegers implements Strategy<List<Integer>, Integer> {

    private final static Logger logger = LoggerFactory.getLogger(AddAnyNumberOfIntegers.class);

    private final TypeDefinition acceptableTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(List.class)
                    .addGenericParameter(
                            new TypeDefinition.builder()
                                    .clazz(Integer.class)
                                    .build()
                    )
                    .build();

    private final TypeDefinition returnTypeDefinition =
            new TypeDefinition.builder()
                    .clazz(Integer.class)
                    .build();

    private final String description = "Przyjmuję listę integerów i sumuje wszystkie jej pozycje";

    @Override
    @LogableProcessDataStrategyImpl
    public Integer processData(List<Integer> dataBeforeProcessing) {

        Integer score = 0;
        for(Integer integer: dataBeforeProcessing) {
            score = score + integer;
        }

        return score;
    }

    @Override
    public String getStrategyDescription() { return description; }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() { return acceptableTypeDefinition; }

    @Override
    public TypeDefinition getReturnTypeDefinition() { return returnTypeDefinition; }
}
