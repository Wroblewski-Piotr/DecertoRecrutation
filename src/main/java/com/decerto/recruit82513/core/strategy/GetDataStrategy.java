package com.decerto.recruit82513.core.strategy;


import com.decerto.recruit82513.core.model.TypeDefinition;

/**
 * Serwis definujacy warstwę pozyskiwania danych
 *
 * @param <T> - Typ obiektów które zostaną pobrane i zwrócone w postaci Listy
 *
 * @author Piotr Wróblewski
 */
public interface GetDataStrategy<T> {

    /**
     * Definicja metody dostarczającej dane typu T
     *
     * @return Lista danych typu T
     */
    T getData();

    /**
     * Definicja metody zwracającej obiekt określający zwracany typ z uwzględnieniem generycznych parametrów
     *
     * @return obiekt typu TypeDefinition określający zwracany typ
     */
    TypeDefinition getReturnTypeDefinition();
}
