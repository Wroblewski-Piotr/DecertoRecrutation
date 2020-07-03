package com.decerto.recruit82513.core;

import com.decerto.recruit82513.core.Exception.Recruit82513Exception;
import com.decerto.recruit82513.core.dto.ResponseObjectDTO;
import com.decerto.recruit82513.core.model.TypeDefinition;
import com.decerto.recruit82513.core.strategy.GetDataStrategy;
import com.decerto.recruit82513.core.strategy.ProcessDataStrategy;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;


@Component
@AllArgsConstructor
public class GetAndProcessDataExecutor {

    private final static Logger logger = LoggerFactory.getLogger(GetAndProcessDataExecutor.class);

    private ApplicationContext context;

    public ResponseObjectDTO getAndProcessData(String getDataStrategyQualifier, String processDataStrategyQualifier) {

        GetDataStrategy getDataStrategy = findGetDataStrategyByGetDataStrategyQualifier(getDataStrategyQualifier);
        ProcessDataStrategy processDataStrategy = findProcessDataStrategyByProcessDataStrategyQualifier(processDataStrategyQualifier);

        validateStrategysCompability(getDataStrategy, processDataStrategy);

        Object dataBeforeProcessing = getDataStrategy.getData();
        Object dataAfterProcessing = processDataStrategy.processData(dataBeforeProcessing);

        return new ResponseObjectDTO(getDataStrategyQualifier, processDataStrategyQualifier, dataBeforeProcessing, dataAfterProcessing);
    }

    private GetDataStrategy findGetDataStrategyByGetDataStrategyQualifier(String getDataStrategyQualifier) {
        GetDataStrategy getDataStrategy;
        try{
            getDataStrategy = context.getBean(getDataStrategyQualifier, GetDataStrategy.class);
        } catch (NoSuchBeanDefinitionException e) {

            String errorComunicate =
                    "Nie można odnaleźć strategi pobierania danych o nazwie "
                            + getDataStrategyQualifier;

            logger.error(errorComunicate);
            throw new Recruit82513Exception.builder()
                    .responsetatus(400)
                    .responseBody(errorComunicate)
                    .build();
        }
        return getDataStrategy;
    }

    private ProcessDataStrategy findProcessDataStrategyByProcessDataStrategyQualifier(String processDataStrategyQualifier) {
        ProcessDataStrategy processDataStrategy;
        try{
            processDataStrategy = context.getBean(processDataStrategyQualifier, ProcessDataStrategy.class);
        } catch (NoSuchBeanDefinitionException e) {

            String errorComunicate =
                    "Nie można odnaleźć strategi przetwarzania danych o nazwie "
                            + processDataStrategyQualifier;

            logger.error(errorComunicate);
            throw new Recruit82513Exception.builder()
                    .responsetatus(400)
                    .responseBody(errorComunicate)
                    .build();
        }
        return processDataStrategy;
    }

    private void validateStrategysCompability(GetDataStrategy getDataStrategy, ProcessDataStrategy processDataStrategy) {

        TypeDefinition returnDataDefinition = getDataStrategy.getReturnTypeDefinition();
        TypeDefinition acceptableDataDefinition = processDataStrategy.getAcceptableTypeDefinition();

        if(!returnDataDefinition.equals(acceptableDataDefinition)) {

            String errorComunicate =
                    "Strategia pozyskiwania danych - "
                            + getDataStrategy.getClass().getSimpleName()
                            + ", oraz strategia przetwarzania danych - "
                            + processDataStrategy.getClass().getSimpleName()
                            + "nie są ze sobą niekompatybilne pod względem typu przekazywanych danych";

            logger.error(errorComunicate);
            throw new Recruit82513Exception.builder()
                    .responsetatus(500)
                    .responseBody(errorComunicate)
                    .build();
        }
    }
}
