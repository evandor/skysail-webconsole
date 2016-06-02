package io.skysail.webconsole.entities;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString
public class ExportPackage {

    private String pkgName;

    @Setter
    private String version;

    @Setter
    private String uses;

    @Setter
    private String mandatory, include, exclude;

    private Map<String,String> additionalAttributes = new HashMap<>();

    public ExportPackage(String pkgName) {
        this.pkgName = pkgName;
    }

    public void addAdditionalAttributes(String key, String value) {
        this.additionalAttributes .put(key,value);
    }

}
