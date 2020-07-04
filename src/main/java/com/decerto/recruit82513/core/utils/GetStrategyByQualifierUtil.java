package com.decerto.recruit82513.core.utils;

import com.decerto.recruit82513.core.Exception.Recruit82513Exception;
import com.decerto.recruit82513.core.Executor.GetAndProcessDataExecutor;
import com.decerto.recruit82513.core.Strategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;

public class GetStrategyByQualifierUtil {

    private final static Logger logger = LoggerFactory.getLogger(GetAndProcessDataExecutor.class);

    public static Strategy findStrategyByQualifier(ApplicationContext context, String qualifier, boolean logErrorAndThrowException) {
        Strategy strategy = null;
        try{
            strategy = context.getBean(qualifier, Strategy.class);
        } catch (NoSuchBeanDefinitionException e) {

            if(logErrorAndThrowException){
                String errorComunicate =
                        "Nie można odnaleźć strategi o nazwie "
                                + qualifier;

                logger.error(errorComunicate);
                throw Recruit82513Exception.getRecruit82513ExceptionWithStatus400(errorComunicate);
            }
        }
        return strategy;
    }
}
