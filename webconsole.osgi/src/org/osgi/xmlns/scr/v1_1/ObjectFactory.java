//
// Diese Datei wurde mit der JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 generiert 
// Siehe <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// �nderungen an dieser Datei gehen bei einer Neukompilierung des Quellschemas verloren. 
// Generiert: 2016.07.29 um 11:26:52 AM CEST 
//


package org.osgi.xmlns.scr.v1_1;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.osgi.xmlns.scr.v1_1 package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _Component_QNAME = new QName("http://www.osgi.org/xmlns/scr/v1.1.0", "component");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.osgi.xmlns.scr.v1_1
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link Tcomponent }
     * 
     */
    public Tcomponent createTcomponent() {
        return new Tcomponent();
    }

    /**
     * Create an instance of {@link Timplementation }
     * 
     */
    public Timplementation createTimplementation() {
        return new Timplementation();
    }

    /**
     * Create an instance of {@link Treference }
     * 
     */
    public Treference createTreference() {
        return new Treference();
    }

    /**
     * Create an instance of {@link Tprovide }
     * 
     */
    public Tprovide createTprovide() {
        return new Tprovide();
    }

    /**
     * Create an instance of {@link Tservice }
     * 
     */
    public Tservice createTservice() {
        return new Tservice();
    }

    /**
     * Create an instance of {@link Tproperty }
     * 
     */
    public Tproperty createTproperty() {
        return new Tproperty();
    }

    /**
     * Create an instance of {@link Tproperties }
     * 
     */
    public Tproperties createTproperties() {
        return new Tproperties();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Tcomponent }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.osgi.org/xmlns/scr/v1.1.0", name = "component")
    public JAXBElement<Tcomponent> createComponent(Tcomponent value) {
        return new JAXBElement<Tcomponent>(_Component_QNAME, Tcomponent.class, null, value);
    }

}
