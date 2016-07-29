//
// Diese Datei wurde mit der JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 generiert 
// Siehe <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// �nderungen an dieser Datei gehen bei einer Neukompilierung des Quellschemas verloren. 
// Generiert: 2016.07.29 um 11:26:52 AM CEST 
//


package org.osgi.xmlns.scr.v1_1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAnyAttribute;
import javax.xml.bind.annotation.XmlAnyElement;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElements;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.namespace.QName;
import org.w3c.dom.Element;


/**
 * <p>Java-Klasse f�r Tcomponent complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="Tcomponent">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;choice maxOccurs="unbounded" minOccurs="0">
 *           &lt;element name="property" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Tproperty"/>
 *           &lt;element name="properties" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Tproperties"/>
 *         &lt;/choice>
 *         &lt;element name="service" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Tservice" minOccurs="0"/>
 *         &lt;element name="reference" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Treference" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="implementation" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Timplementation"/>
 *         &lt;any processContents='lax' maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="enabled" type="{http://www.w3.org/2001/XMLSchema}boolean" default="true" />
 *       &lt;attribute name="name" type="{http://www.w3.org/2001/XMLSchema}token" />
 *       &lt;attribute name="factory" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="immediate" type="{http://www.w3.org/2001/XMLSchema}boolean" />
 *       &lt;attribute name="configuration-policy" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Tconfiguration-policy" default="optional" />
 *       &lt;attribute name="activate" type="{http://www.w3.org/2001/XMLSchema}token" default="activate" />
 *       &lt;attribute name="deactivate" type="{http://www.w3.org/2001/XMLSchema}token" default="deactivate" />
 *       &lt;attribute name="modified" type="{http://www.w3.org/2001/XMLSchema}token" />
 *       &lt;anyAttribute/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Tcomponent", propOrder = {
    "propertyOrProperties",
    "service",
    "reference",
    "implementation",
    "any"
})
public class Tcomponent {

    @XmlElements({
        @XmlElement(name = "property", type = Tproperty.class),
        @XmlElement(name = "properties", type = Tproperties.class)
    })
    protected List<Object> propertyOrProperties;
    protected Tservice service;
    protected List<Treference> reference;
    @XmlElement(required = true)
    protected Timplementation implementation;
    @XmlAnyElement(lax = true)
    protected List<Object> any;
    @XmlAttribute(name = "enabled")
    protected Boolean enabled;
    @XmlAttribute(name = "name")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String name;
    @XmlAttribute(name = "factory")
    protected String factory;
    @XmlAttribute(name = "immediate")
    protected Boolean immediate;
    @XmlAttribute(name = "configuration-policy")
    protected TconfigurationPolicy configurationPolicy;
    @XmlAttribute(name = "activate")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String activate;
    @XmlAttribute(name = "deactivate")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String deactivate;
    @XmlAttribute(name = "modified")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String modified;
    @XmlAnyAttribute
    private Map<QName, String> otherAttributes = new HashMap<QName, String>();

    /**
     * Gets the value of the propertyOrProperties property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the propertyOrProperties property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPropertyOrProperties().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Tproperty }
     * {@link Tproperties }
     * 
     * 
     */
    public List<Object> getPropertyOrProperties() {
        if (propertyOrProperties == null) {
            propertyOrProperties = new ArrayList<Object>();
        }
        return this.propertyOrProperties;
    }

    /**
     * Ruft den Wert der service-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link Tservice }
     *     
     */
    public Tservice getService() {
        return service;
    }

    /**
     * Legt den Wert der service-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link Tservice }
     *     
     */
    public void setService(Tservice value) {
        this.service = value;
    }

    /**
     * Gets the value of the reference property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the reference property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getReference().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Treference }
     * 
     * 
     */
    public List<Treference> getReference() {
        if (reference == null) {
            reference = new ArrayList<Treference>();
        }
        return this.reference;
    }

    /**
     * Ruft den Wert der implementation-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link Timplementation }
     *     
     */
    public Timplementation getImplementation() {
        return implementation;
    }

    /**
     * Legt den Wert der implementation-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link Timplementation }
     *     
     */
    public void setImplementation(Timplementation value) {
        this.implementation = value;
    }

    /**
     * Gets the value of the any property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the any property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAny().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Element }
     * {@link Object }
     * 
     * 
     */
    public List<Object> getAny() {
        if (any == null) {
            any = new ArrayList<Object>();
        }
        return this.any;
    }

    /**
     * Ruft den Wert der enabled-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public boolean isEnabled() {
        if (enabled == null) {
            return true;
        } else {
            return enabled;
        }
    }

    /**
     * Legt den Wert der enabled-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setEnabled(Boolean value) {
        this.enabled = value;
    }

    /**
     * Ruft den Wert der name-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Legt den Wert der name-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Ruft den Wert der factory-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFactory() {
        return factory;
    }

    /**
     * Legt den Wert der factory-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFactory(String value) {
        this.factory = value;
    }

    /**
     * Ruft den Wert der immediate-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isImmediate() {
        return immediate;
    }

    /**
     * Legt den Wert der immediate-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setImmediate(Boolean value) {
        this.immediate = value;
    }

    /**
     * Ruft den Wert der configurationPolicy-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link TconfigurationPolicy }
     *     
     */
    public TconfigurationPolicy getConfigurationPolicy() {
        if (configurationPolicy == null) {
            return TconfigurationPolicy.OPTIONAL;
        } else {
            return configurationPolicy;
        }
    }

    /**
     * Legt den Wert der configurationPolicy-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link TconfigurationPolicy }
     *     
     */
    public void setConfigurationPolicy(TconfigurationPolicy value) {
        this.configurationPolicy = value;
    }

    /**
     * Ruft den Wert der activate-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getActivate() {
        if (activate == null) {
            return "activate";
        } else {
            return activate;
        }
    }

    /**
     * Legt den Wert der activate-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setActivate(String value) {
        this.activate = value;
    }

    /**
     * Ruft den Wert der deactivate-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDeactivate() {
        if (deactivate == null) {
            return "deactivate";
        } else {
            return deactivate;
        }
    }

    /**
     * Legt den Wert der deactivate-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDeactivate(String value) {
        this.deactivate = value;
    }

    /**
     * Ruft den Wert der modified-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModified() {
        return modified;
    }

    /**
     * Legt den Wert der modified-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModified(String value) {
        this.modified = value;
    }

    /**
     * Gets a map that contains attributes that aren't bound to any typed property on this class.
     * 
     * <p>
     * the map is keyed by the name of the attribute and 
     * the value is the string value of the attribute.
     * 
     * the map returned by this method is live, and you can add new attribute
     * by updating the map directly. Because of this design, there's no setter.
     * 
     * 
     * @return
     *     always non-null
     */
    public Map<QName, String> getOtherAttributes() {
        return otherAttributes;
    }

}
