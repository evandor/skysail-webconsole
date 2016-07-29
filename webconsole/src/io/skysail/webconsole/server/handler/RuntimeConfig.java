package io.skysail.webconsole.server.handler;

import java.util.Properties;

import lombok.Getter;

public class RuntimeConfig {

    @Getter
    private Properties systemProperties;

    public RuntimeConfig() {
        systemProperties = System.getProperties();
    }
}
