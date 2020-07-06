package com.decerto.recruit82513.core.Executor;

import com.decerto.recruit82513.core.modelAndDTO.Nothing;
import com.decerto.recruit82513.core.modelAndDTO.StrategyDTO;
import com.decerto.recruit82513.core.modelAndDTO.StrategyProcessScore;
import com.decerto.recruit82513.core.Strategy;
import com.decerto.recruit82513.core.utils.GetStrategyByQualifierUtil;
import com.decerto.recruit82513.core.utils.ValidateStrategyCompabilityUtils;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;


@Component
@AllArgsConstructor
public class GetAndProcessDataExecutor {

    private ApplicationContext context;

    public List<StrategyProcessScore> getAndProcessData(List<String> strategyQualifierList) {

        List<Strategy> strategyList = new LinkedList<>();
        List<StrategyProcessScore> strategyProcessScores = new LinkedList<>();

        strategyQualifierList.forEach(strategyQualifier ->
                        strategyList.add(GetStrategyByQualifierUtil.findStrategyByQualifier(context, strategyQualifier, true)));

        ValidateStrategyCompabilityUtils.validateCompabilityOfStrategysChain(strategyList, true);

        Object inicialData = new Nothing();
        Object scoreObject = inicialData;

        for(Strategy strategy: strategyList){
            scoreObject = strategy.processData(scoreObject);

            strategyProcessScores.add(
                    new StrategyProcessScore(
                            new StrategyDTO(strategy),
                            scoreObject)
            );
        }

        return strategyProcessScores;

    }
}
