package io.skysail.webconsole.entities;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

@Getter
public class PackageDescriptor {

    private String pkgName;

    private Map<String, String> additionalAttributes = new HashMap<>();

     public PackageDescriptor(String pkgName) {
     this.pkgName = pkgName;
     }

    public void addAdditionalAttributes(String key, String value) {
        this.additionalAttributes.put(key, value);
    }
}
