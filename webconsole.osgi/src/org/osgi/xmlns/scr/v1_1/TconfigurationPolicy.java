//
// Diese Datei wurde mit der JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 generiert 
// Siehe <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Änderungen an dieser Datei gehen bei einer Neukompilierung des Quellschemas verloren. 
// Generiert: 2016.07.29 um 11:26:52 AM CEST 
//


package org.osgi.xmlns.scr.v1_1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java-Klasse für Tconfiguration-policy.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * <p>
 * <pre>
 * &lt;simpleType name="Tconfiguration-policy">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="optional"/>
 *     &lt;enumeration value="require"/>
 *     &lt;enumeration value="ignore"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "Tconfiguration-policy")
@XmlEnum
public enum TconfigurationPolicy {

    @XmlEnumValue("optional")
    OPTIONAL("optional"),
    @XmlEnumValue("require")
    REQUIRE("require"),
    @XmlEnumValue("ignore")
    IGNORE("ignore");
    private final String value;

    TconfigurationPolicy(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static TconfigurationPolicy fromValue(String v) {
        for (TconfigurationPolicy c: TconfigurationPolicy.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
