package com.decerto.recruit82513.strategyImpl.getDataStrategyImpl;

import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.strategy.GetDataStrategy;
import com.decerto.recruit82513.model.Pair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component("GetTwoIntegersFromApiStrategyV1")
public class GetTwoIntegersFromApiStrategyV1 implements GetDataStrategy<Pair<Integer>> {

    private final static Logger logger = LoggerFactory.getLogger(GetTwoIntegersFromApiStrategyV1.class);

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

        int min=0;
        int max=100;

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://www.random.org/integers/?num=2&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new";
        String integersAsString = restTemplate.getForEntity(url, String.class).getBody();

        List<Integer> integersList = convertPlainTextResponseToList(integersAsString);

        int var1 = integersList.get(0);
        int var2 = integersList.get(1);

        Pair<Integer> score = new Pair(var1, var2);

        logger.info("Wygenerowany objekt - " + score.toString());

        return score;
    }

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
