package com.decerto.recruit82513.core.controllers;

import com.decerto.recruit82513.core.Executor.GetAndProcessDataExecutor;
import com.decerto.recruit82513.core.Strategy;
import com.decerto.recruit82513.core.model.Nothing;
import com.decerto.recruit82513.core.model.StrategyProcessScore;
import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.utils.GetStrategyByQualifierUtil;
import com.decerto.recruit82513.core.utils.ValidateStrategyCompabilityUtils;
import org.springframework.context.ApplicationContext;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class Recruit82513Controller {

    private final TypeDefinition generateDataStrategyAcceptableTypeDefinition = new TypeDefinition.builder().clazz(Nothing.class).build();

    GetAndProcessDataExecutor getAndProcessDataExecutor;
    List<Strategy> allStrategies;
    ApplicationContext context;

    public Recruit82513Controller(GetAndProcessDataExecutor getAndProcessDataExecutor, List<Strategy> allStrategies, ApplicationContext context) {
        this.getAndProcessDataExecutor = getAndProcessDataExecutor;
        this.allStrategies = allStrategies;
        this.context = context;
    }

    /**
     *
     * @param strategyQualifiers - lista strategii definiująca łąńcych przetwarzania danych
     *
     * @return listę objektów prezentujących wyniki kolejnych kroków
     */
    @GetMapping(value = "process")
    public ResponseEntity<List<StrategyProcessScore>> process(@RequestParam List<String> strategyQualifiers ) {

        List<StrategyProcessScore> responseObjectDTO = getAndProcessDataExecutor.getAndProcessData(strategyQualifiers);

        return ResponseEntity.ok().body(responseObjectDTO);
    }

    /**
     *
     * @param strategyQualifier - qualifier strategii dla ktorej chcemy pozyskać kompatybilne strategie
     *
     * @return lista qualifier'ów strategii kompatybilnych do strategyQualifier
     */
    @GetMapping(value = "getCompatibleStrategies")
    List<String> getCompatibleStrategies(@RequestParam String strategyQualifier) {

        List<String> compatibleStrategiesListQualifiers;

        Strategy strategyFromRequest = GetStrategyByQualifierUtil.findStrategyByQualifier(context, strategyQualifier, true);

        compatibleStrategiesListQualifiers = allStrategies.stream()
                .filter(strategy -> ValidateStrategyCompabilityUtils.validateCompabilityOfTwoStrategy(strategyFromRequest, strategy) == null)
                .map(strategy -> strategy.getClass().getSimpleName())
                .collect(Collectors.toList());

        return compatibleStrategiesListQualifiers;
    }

    /**
     *
     * Kontroler zwracający listę strategii generujących dane. przez strategię generującą dane należy rozumieć taką krurej metoda processData przyjmuje jak orgument objekt typu Nothing
     *
     * @return Lista strategi generujących dane
     */
    @GetMapping(value = "getGenerateDataStrategys")
    List<String> getGenerateDataStrategys() {

        List<String> generateDataStrategys;

        generateDataStrategys = allStrategies.stream()
                .filter(strategy -> strategy.getAcceptableTypeDefinition().equals(generateDataStrategyAcceptableTypeDefinition))
                .map(strategy -> strategy.getClass().getSimpleName())
                .collect(Collectors.toList());

        return generateDataStrategys;
    }
}
