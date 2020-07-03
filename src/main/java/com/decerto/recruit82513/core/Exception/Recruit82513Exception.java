package com.decerto.recruit82513.core.Exception;

import com.decerto.recruit82513.service.GetAndProcessDataServiceImpl;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Getter
public class Recruit82513Exception extends RuntimeException {

    private final static Logger logger = LoggerFactory.getLogger(GetAndProcessDataServiceImpl.class);

    private int responseStatus;
    private Object responseBody;

    public Recruit82513Exception(builder builder) {
        this.responseBody = builder.responseBody;
        this.responseStatus = builder.responseStatus;
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
            logger.error(this.responseBody.toString());
            return new Recruit82513Exception(this);
        }



    }
}
