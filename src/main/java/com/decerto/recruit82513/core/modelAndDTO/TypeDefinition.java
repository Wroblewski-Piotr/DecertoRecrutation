package com.decerto.recruit82513.core.modelAndDTO;

import java.util.LinkedList;
import java.util.List;

public class TypeDefinition {

    public TypeDefinition(builder builder) {
        this.clazz = builder.clazz;
        this.genericsParameters = builder.genericsParameters;
    }

    private Class clazz;
    private List<TypeDefinition> genericsParameters;

    public boolean equals(TypeDefinition typeDefinition) {
        if (this == typeDefinition) return true;

        if(!this.clazz.equals(typeDefinition.clazz)) return false;

        if(this.genericsParameters.size() != typeDefinition.genericsParameters.size()) return false;

        for(int i=0 ; i<this.genericsParameters.size(); i++) {
            if(!this.genericsParameters.get(i).equals(typeDefinition.genericsParameters.get(i))){
                return false;
            }
        }

        return true;
    }

    public static class builder{
        private Class clazz;
        private List<TypeDefinition> genericsParameters = new LinkedList<>();

        public builder clazz(Class clazz){
            this.clazz = clazz;
            return this;
        }

        public builder addGenericParameter(TypeDefinition typeDefinition) {
            this.genericsParameters.add(typeDefinition);
            return this;
        }

        public TypeDefinition build() {
            return new TypeDefinition(this);
        }
    }
}
