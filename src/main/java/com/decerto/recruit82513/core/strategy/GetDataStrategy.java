package com.decerto.recruit82513.core.strategy;

import com.decerto.recruit82513.core.model.ReturnValueDescription;

import java.util.List;

/**
 * Serwis definujacy warstwę pozyskiwania danych
 *
 * @param <T> - Typ obiektów które zostaną pobrane i zwrócone w postaci Listy
 *
 * @author Piotr Wróblewski
 */
public interface GetDataStrategy<T> {

    /**
     * Definicja metody dostarczającej listę danych typu T
     *
     * @return Lista danych typu T
     */
    List<T> getData();

    /**
     * metoda zwracająca Objekt harakteryzujący dane zwracane przez implementacje
     *
     * @return
     */
    ReturnValueDescription getDataStrategyReturnValueDescriptionModel();
}
