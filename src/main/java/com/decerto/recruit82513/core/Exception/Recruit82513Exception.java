package com.decerto.recruit82513.core.Exception;

import lombok.Getter;

@Getter
public class Recruit82513Exception extends RuntimeException {

    private int responseStatus;
    private Object responseBody;

    public Recruit82513Exception(builder builder) {
        this.responseBody = builder.responseBody;
        this.responseStatus = builder.responseStatus;
    }

    public static Recruit82513Exception getRecruit82513ExceptionWithStatus400(Object responseBody) {
        return new Recruit82513Exception.builder()
                .responsetatus(400)
                .responseBody(responseBody)
                .build();
    }

    public static class builder {

        private int responseStatus;
        private Object responseBody;

        public builder responsetatus(int responseStatus) {
            this.responseStatus = responseStatus;
            return this;
        }

        public builder responseBody(Object responseBody) {
            this.responseBody = responseBody;
            return this;
        }

        public Recruit82513Exception build() {
            return new Recruit82513Exception(this);
        }
    }
}
