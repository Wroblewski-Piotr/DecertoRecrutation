package com.decerto.recruit82513.core.utils;

import com.decerto.recruit82513.core.Exception.Recruit82513Exception;
import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
import com.decerto.recruit82513.core.Strategy;

import java.util.LinkedList;
import java.util.List;

public class ValidateStrategyCompabilityUtils {

    public static List<String> validateCompabilityOfStrategysChain(List<Strategy> processDataStrategyList, boolean throwExceptionIfIsInvalid){
        List<String> errorsMessageList = new LinkedList<>();

        if(processDataStrategyList.size() > 1) {
            for(int i=1; i<processDataStrategyList.size(); i++) {
                String errorMesage = validateCompabilityOfTwoStrategy(processDataStrategyList.get(i-1), processDataStrategyList.get(i));
                if(errorMesage != null) errorsMessageList.add(errorMesage);
            }
        }

        if(errorsMessageList.size() != 0 && throwExceptionIfIsInvalid) {
            throw Recruit82513Exception.getRecruit82513ExceptionWithStatus400(errorsMessageList);
        }

        return errorsMessageList;

    }

    public static String validateCompabilityOfTwoStrategy(Strategy firstStrategy, Strategy secondStrategy) {

        TypeDefinition returnDataDefinition = firstStrategy.getReturnTypeDefinition();
        TypeDefinition acceptableDataDefinition = secondStrategy.getAcceptableTypeDefinition();

        String errorComunicate = null;

        if(!returnDataDefinition.equals(acceptableDataDefinition)) {

            errorComunicate =
                    "Strategia - "
                            + firstStrategy.getStrategyQualifier()
                            + ", oraz strategia - "
                            + secondStrategy.getStrategyQualifier()
                            + " nie są ze sobą niekompatybilne pod względem typu przekazywanych danych"
                            + firstStrategy.getReturnTypeDefinition() + "(Typ zwracany pierwszej strategi)"
                            + " != "
                            + secondStrategy.getAcceptableTypeDefinition() + "(Typ przyjmowany drugiej strategi)";

        }

        return errorComunicate;
    }
}
