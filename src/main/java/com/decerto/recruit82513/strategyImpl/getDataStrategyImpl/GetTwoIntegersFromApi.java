package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.adnotations.LogableGenerateDataStrategyImpl;
import com.decerto.recruit82513.core.modelAndDTO.Nothing;
import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
import com.decerto.recruit82513.core.Strategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component("GetTwoIntegersFromApi")
public class GetTwoIntegersFromApi implements Strategy<Nothing, List<Integer>> {

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

    private final String description = "Tworzy obiekt typu List na podstawie dwóch Integerów pobranych z zewnętrznego api";

    @Override
    @LogableGenerateDataStrategyImpl()
    public List<Integer> processData(Nothing nothing) {

        int min=0;
        int max=100;

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://www.random.org/integers/?num=2&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new";
        String integersAsString = restTemplate.getForEntity(url, String.class).getBody();

        List<Integer> integersList = convertPlainTextResponseToList(integersAsString);

        return integersList;
    }

    @Override
    public String getStrategyDescription() { return description; }

    @Override
    public TypeDefinition getAcceptableTypeDefinition() { return acceptableTypeDefinition; }

    @Override
    public TypeDefinition getReturnTypeDefinition() {
        return returnTypeDefinition;
    }


    private List<Integer> convertPlainTextResponseToList(String integersAsString) {

        List<Integer> convertedList = new ArrayList<>();
        Arrays.asList(integersAsString.split("\\r?\\n")).forEach(s -> convertedList.add(Integer.valueOf(s)));

        return convertedList;
    }

}
