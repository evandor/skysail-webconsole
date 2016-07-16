package io.skysail.webconsole.osgi.messages;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class Alert {

    public enum Level {
        SUCCESS, INFO, WARNING, DANGER;
    }

    private final String message;
    private final Level level;

}
