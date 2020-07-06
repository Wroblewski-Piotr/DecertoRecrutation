package com.decerto.recruit82513.core;


import com.decerto.recruit82513.core.modelAndDTO.TypeDefinition;
import org.springframework.stereotype.Component;

/**
 * Serwis definiujący warstwę przetwarzania danych
 *
 * @param <T> - Typ obiektu przyjmowanego
 * @param <V> - Typ obiektu zwracanego
 *
 * @author Piotr Wróblewski
 */
public interface Strategy<T, V> {

    /**
     * Metoda przetwarzajaca dane dostarczone w postaci obiektu typu T
     *
     * @param dataBeforeProcessing - obiekt przed przeprocesowniem
     * @return - obiekt będący wynikiem
     */
    V processData(T dataBeforeProcessing);


    /**
     * Metoda zwracająca opis działania strategii
     *
     * @return opis ziałania strategii
     */
    String getStrategyDescription();

    /**
     * Definicja metody zwracającej obiekt określający akceptowany typ z uwzględnieniem generycznych parametrów
     *
     * @return obiekt typu TypeDefinition określający akceptowany typ
     */
    TypeDefinition getAcceptableTypeDefinition();

    /**
     * Definicja metody zwracającej obiekt określający zwracany typ z uwzględnieniem generycznych parametrów
     *
     * @return obiekt typu TypeDefinition określający zwracany typ
     */
    TypeDefinition getReturnTypeDefinition();


    /**
     * Zwraca Qualifier beana będącego implementacją interface Strategy
     *
     * @return Qualifier beana będącego implementacją interface Strategy
     */
    default String getStrategyQualifier() {
        return this.getClass().getAnnotation(Component.class).value();
    }

}
