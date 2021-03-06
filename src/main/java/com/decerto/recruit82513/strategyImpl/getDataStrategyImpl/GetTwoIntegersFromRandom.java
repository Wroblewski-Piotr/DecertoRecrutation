package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.adnotations.LogableGenerateDataStrategyImpl;
import com.decerto.recruit82513.core.modelAndDTO.Nothing;
import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
import com.decerto.recruit82513.core.Strategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;
import java.util.Random;

@Component("GetTwoIntegersFromRandom")
public class GetTwoIntegersFromRandom implements Strategy<Nothing, List<Integer>> {

    private final static Logger logger = LoggerFactory.getLogger(GetTwoIntegersFromRandom.class);

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

    private final String description = "Tworzy obiekt typu List na podstawie dwóch Integerów wygenerowanych losowo";

    @Override
    @LogableGenerateDataStrategyImpl()
    public List<Integer> processData(Nothing nothing) {

        Random generator = new Random();
        int min=0;
        int max=100;

        int var1 = generator.nextInt(max - min) + min;
        int var2 = generator.nextInt(max - min) + min;

        List<Integer> score = new LinkedList<>();
        score.add(var1);
        score.add(var2);

        return score;
    }

    @Override
    public String getStrategyDescription() { return description; }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() { return acceptableTypeDefinition; }

    @Override
    public TypeDefinition getReturnTypeDefinition() {
        return returnTypeDefinition;
    }
}
