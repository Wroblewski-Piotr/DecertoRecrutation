package com.decerto.recruit82513.core.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Aspect
@Component
public class LoggingAspect {

    private final static Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Around("@annotation(com.decerto.recruit82513.core.adnotations.LogableGenerateDataStrategyImpl)")
    public Object aroundGenerateDataStrategy(ProceedingJoinPoint joinPoint) {
        try {
            String packageName = joinPoint.getSignature().getDeclaringTypeName();

            logger.info("----------------------------------------------------------------------------------");
            logger.info("Wywołanie - " + packageName);

            Object generatedObject = joinPoint.proceed();

            logger.info("Wygenerowany objekt - " + generatedObject.toString());
            logger.info("-----------------------------------------");

            return generatedObject;
        } catch (Throwable throwable) {
            if(throwable instanceof RuntimeException) {
                throw (RuntimeException) throwable;
            } else {
                throw new RuntimeException();
            }
        }
    }

    @Around("@annotation(com.decerto.recruit82513.core.adnotations.LogableProcessDataStrategyImpl)")
    public Object aroundProcessDataStrategy(ProceedingJoinPoint joinPoint) {
        try {

            String packageName = joinPoint.getSignature().getDeclaringTypeName();
            List args = Arrays.asList(joinPoint.getArgs());

            logger.info("Wywołanie - " + packageName);
            logger.info("Przyjęte dane - " + args.get(0));

            Object generatedObject = joinPoint.proceed();

            logger.info("Wygenerowany objekt - " + generatedObject.toString());
            logger.info("-----------------------------------------");

            return generatedObject;
        } catch (Throwable throwable) {
            if(throwable instanceof RuntimeException) {
                throw (RuntimeException) throwable;
            } else {
                throw new RuntimeException();
            }
        }
    }
}
