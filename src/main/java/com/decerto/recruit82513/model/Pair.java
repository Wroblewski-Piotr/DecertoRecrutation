package com.decerto.recruit82513.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Pair<T> {

    private T var1;
    private T var2;
}
