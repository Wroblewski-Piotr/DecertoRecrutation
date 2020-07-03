package com.decerto.recruit82513.core.strategy;

import com.decerto.recruit82513.core.model.AcceptValueDescription;

import java.util.List;

/**
 * Serwis definiujący warstwę przetwarzania danych
 *
 * @param <T> - Typ obiektów które zostaną przetworzone
 * @param <V> - Typ obiektu będącego wynikiem
 *
 * @author Piotr Wróblewski
 */
public interface ProcessDataStrategy<T, V> {

    /**
     * Metoda przetwarzajaca dane dostarczone w postaci listy obiektów typu T
     *
     * @param valuesBeforeProcessing - Lista obiektów które zostaną przetworzone
     * @return - obiekt będący wynikiem
     */
    V processData(List<T> valuesBeforeProcessing);

    /**
     * metoda zwracająca Objekt harakteryzujący dane akceptowane przez implementacje
     *
     * @return
     */
    AcceptValueDescription getProcessDataStrategyAcceptValueDescriptionModel();
}
