package com.decerto.recruit82513.core.strategy;


import com.decerto.recruit82513.core.model.TypeDefinition;

/**
 * Serwis definiujący warstwę przetwarzania danych
 *
 * @param <T> - Typ obiektu który zostanie przetworzony
 * @param <V> - Typ obiektu będącego wynikiem
 *
 * @author Piotr Wróblewski
 */
public interface ProcessDataStrategy<T, V> {

    /**
     * Metoda przetwarzajaca dane dostarczone w postaci obiektu typu T
     *
     * @param dataBeforeProcessing - obiekt przed przeprocesowniem
     * @return - obiekt będący wynikiem
     */
    V processData(T dataBeforeProcessing);

    /**
     * Definicja metody zwracającej obiekt określający akceptowany typ z uwzględnieniem generycznych parametrów
     *
     * @return obiekt typu TypeDefinition określający akceptowany typ
     */
    TypeDefinition getAcceptableTypeDefinition();

}
