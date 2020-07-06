package com.decerto.recruit82513.core.utils;

import com.decerto.recruit82513.core.Exception.Recruit82513Exception;
import com.decerto.recruit82513.core.Strategy;
import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GetStrategyByQualifierUtilTest {

    private ApplicationContext context = mock(ApplicationContext.class);

    private final String qualifier = "quaifier";

    @Test
    public void findStrategyByQualifier_success() {
        // given
        Strategy returnedStrategy = createNewStrategyImpl();

        // when
        when(context.getBean(qualifier, Strategy.class)).thenReturn(returnedStrategy);

        // then
        assertTrue(GetStrategyByQualifierUtil.findStrategyByQualifier(context, qualifier, true) == returnedStrategy );
    }

    @Test
    public void findStrategyByQualifier_notSuccesWithErrorThrow() {
        // given

        // when
        when(context.getBean(qualifier, Strategy.class)).thenThrow(NoSuchBeanDefinitionException.class);

        // then
        assertThrows(Recruit82513Exception.class, () -> GetStrategyByQualifierUtil.findStrategyByQualifier(context, qualifier, true));
    }

    @Test
    public void findStrategyByQualifier_notSuccesWithoutErrorThrow() {
        // given

        // when
        when(context.getBean(qualifier, Strategy.class)).thenThrow(NoSuchBeanDefinitionException.class);

        // then
        assertTrue(GetStrategyByQualifierUtil.findStrategyByQualifier(context, qualifier, false) == null);
    }

    private Strategy createNewStrategyImpl() {
        return new Strategy() {
            @Override
            public Object processData(Object dataBeforeProcessing) {
                return null;
            }

            @Override
            public String getStrategyDescription() {
                return null;
            }

            @Override
            public TypeDefinition getAcceptableTypeDefinition() {
                return null;
            }

            @Override
            public TypeDefinition getReturnTypeDefinition() {
                return null;
            }
        };
    }

}