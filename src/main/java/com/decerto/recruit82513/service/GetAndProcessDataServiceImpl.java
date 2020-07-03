package com.decerto.recruit82513.service;

import com.decerto.recruit82513.core.Exception.Recruit82513Exception;
import com.decerto.recruit82513.core.model.ReturnValueDescription;
import com.decerto.recruit82513.core.model.AcceptValueDescription;
import com.decerto.recruit82513.core.dto.ResponseObjectDTO;
import com.decerto.recruit82513.core.strategy.GetDataStrategy;
import com.decerto.recruit82513.core.strategy.ProcessDataStrategy;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GetAndProcessDataServiceImpl implements GetAndProcessDataService {

    private ApplicationContext context;

    public GetAndProcessDataServiceImpl(ApplicationContext context) {
        this.context = context;
    }

    @Override
    public ResponseObjectDTO getAndProcessData(String getDataStrategyQualifier, String processDataStrategyQualifier) {

        GetDataStrategy getDataStrategy = findGetDataStrategyByGetDataStrategyQualifier(getDataStrategyQualifier);
        ProcessDataStrategy processDataStrategy = findProcessDataStrategyByProcessDataStrategyQualifier(processDataStrategyQualifier);

        validateStrategysCompability(getDataStrategy, processDataStrategy);

        List dataBeforeProcessing = getDataStrategy.getData();
        Object dataAfterProcessing = processDataStrategy.processData(dataBeforeProcessing);

        return new ResponseObjectDTO(getDataStrategyQualifier, processDataStrategyQualifier, dataBeforeProcessing, dataAfterProcessing);
    }

    private GetDataStrategy findGetDataStrategyByGetDataStrategyQualifier(String getDataStrategyQualifier) {
        GetDataStrategy getDataStrategy;
        try{
            getDataStrategy = context.getBean(getDataStrategyQualifier, GetDataStrategy.class);
        } catch (NoSuchBeanDefinitionException e) {
            String errorComunicate = "Nie można odnaleźć strategi pobierania danych o nazwie " + getDataStrategyQualifier;
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
            String errorComunicate = "Nie można odnaleźć strategi przetwarzania danych o nazwie " + processDataStrategyQualifier;
            throw new Recruit82513Exception.builder()
                    .responsetatus(400)
                    .responseBody(errorComunicate)
                    .build();
        }
        return processDataStrategy;
    }

    private void validateStrategysCompability(GetDataStrategy getDataStrategy, ProcessDataStrategy processDataStrategy) {
        List<String> errors = new ArrayList<>();

        AcceptValueDescription processDataStrategyAcceptValueDescriptionModel = processDataStrategy.getProcessDataStrategyAcceptValueDescriptionModel();
        ReturnValueDescription getDataStrategyReturnValueDescriptionModel = getDataStrategy.getDataStrategyReturnValueDescriptionModel();

        if(processDataStrategyAcceptValueDescriptionModel.isHaveDefinedAcceptValueType) {
            if(!getDataStrategyReturnValueDescriptionModel.isHaveDefinedReturnValueType || !getDataStrategyReturnValueDescriptionModel.returnValueType.equals(processDataStrategyAcceptValueDescriptionModel.acceptValueType)) {
                String errorComunicate = "Strategia pozyskiwania danych - " + getDataStrategy.getClass() + ", oraz strategia przetwarzania danych - " + processDataStrategy.getClass() + "nie są ze sobą kompatybilne pod względem typu przekazywanych danych";
                errors.add(errorComunicate);
            }
        }

        if(processDataStrategyAcceptValueDescriptionModel.isHaveDefinedAcceptNumberOfValues) {
            if(!getDataStrategyReturnValueDescriptionModel.isHaveDefinedNumberOfReturnValues || !getDataStrategyReturnValueDescriptionModel.numberOfReturnValues.equals(processDataStrategyAcceptValueDescriptionModel.acceptNumberOValues)) {
                String errorComunicate = "Strategia pozyskiwania danych - " + getDataStrategy.getClass() + ", oraz strategia przetwarzania danych - " + processDataStrategy.getClass() + "nie są ze sobą kompatybilne pod względem ilości przekazywanych danych";
                errors.add(errorComunicate);
            }
        }

        if(!errors.isEmpty()) {
            throw new Recruit82513Exception.builder()
                    .responsetatus(500)
                    .responseBody(errors)
                    .build();
        }
    }
}
