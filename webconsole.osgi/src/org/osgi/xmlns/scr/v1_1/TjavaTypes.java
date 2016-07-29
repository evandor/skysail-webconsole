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
 * <p>Java-Klasse für Tjava-types.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * <p>
 * <pre>
 * &lt;simpleType name="Tjava-types">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="String"/>
 *     &lt;enumeration value="Long"/>
 *     &lt;enumeration value="Double"/>
 *     &lt;enumeration value="Float"/>
 *     &lt;enumeration value="Integer"/>
 *     &lt;enumeration value="Byte"/>
 *     &lt;enumeration value="Character"/>
 *     &lt;enumeration value="Boolean"/>
 *     &lt;enumeration value="Short"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "Tjava-types")
@XmlEnum
public enum TjavaTypes {

    @XmlEnumValue("String")
    STRING("String"),
    @XmlEnumValue("Long")
    LONG("Long"),
    @XmlEnumValue("Double")
    DOUBLE("Double"),
    @XmlEnumValue("Float")
    FLOAT("Float"),
    @XmlEnumValue("Integer")
    INTEGER("Integer"),
    @XmlEnumValue("Byte")
    BYTE("Byte"),
    @XmlEnumValue("Character")
    CHARACTER("Character"),
    @XmlEnumValue("Boolean")
    BOOLEAN("Boolean"),
    @XmlEnumValue("Short")
    SHORT("Short");
    private final String value;

    TjavaTypes(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static TjavaTypes fromValue(String v) {
        for (TjavaTypes c: TjavaTypes.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
