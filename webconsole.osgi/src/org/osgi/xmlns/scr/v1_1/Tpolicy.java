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
 * <p>Java-Klasse für Tpolicy.
 *
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * <p>
 * <pre>
 * &lt;simpleType name="Tpolicy">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="static"/>
 *     &lt;enumeration value="dynamic"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 *
 */
@XmlType(name = "Tpolicy")
@XmlEnum
public enum Tpolicy {

    @XmlEnumValue("static")
    STATIC("static"),
    @XmlEnumValue("dynamic")
    DYNAMIC("dynamic");
    private final String value;

    Tpolicy(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static Tpolicy fromValue(String v) {
        for (Tpolicy c: Tpolicy.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
