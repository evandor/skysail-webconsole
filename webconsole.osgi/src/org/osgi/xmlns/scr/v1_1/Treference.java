//
// Diese Datei wurde mit der JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 generiert
// Siehe <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a>
// Änderungen an dieser Datei gehen bei einer Neukompilierung des Quellschemas verloren.
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
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.namespace.QName;

import org.w3c.dom.Element;


/**
 * <p>Java-Klasse für Treference complex type.
 *
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 *
 * <pre>
 * &lt;complexType name="Treference">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;any processContents='lax' maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="name" type="{http://www.w3.org/2001/XMLSchema}token" />
 *       &lt;attribute name="interface" use="required" type="{http://www.w3.org/2001/XMLSchema}token" />
 *       &lt;attribute name="cardinality" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Tcardinality" default="1..1" />
 *       &lt;attribute name="policy" type="{http://www.osgi.org/xmlns/scr/v1.1.0}Tpolicy" default="static" />
 *       &lt;attribute name="target" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="bind" type="{http://www.w3.org/2001/XMLSchema}token" />
 *       &lt;attribute name="unbind" type="{http://www.w3.org/2001/XMLSchema}token" />
 *       &lt;anyAttribute/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Treference", propOrder = {
    "any"
})
public class Treference {

    @XmlAnyElement(lax = true)
    protected List<Object> any;
    @XmlAttribute(name = "name")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String name;
    @XmlAttribute(name = "interface", required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String _interface;
    @XmlAttribute(name = "cardinality")
    protected String cardinality;
    @XmlAttribute(name = "policy")
    protected Tpolicy policy;
    @XmlAttribute(name = "target")
    protected String target;
    @XmlAttribute(name = "bind")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String bind;
    @XmlAttribute(name = "unbind")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    @XmlSchemaType(name = "token")
    protected String unbind;
    @XmlAnyAttribute
    private Map<QName, String> otherAttributes = new HashMap<QName, String>();

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
     * Ruft den Wert der interface-Eigenschaft ab.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getInterface() {
        return _interface;
    }

    /**
     * Legt den Wert der interface-Eigenschaft fest.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setInterface(String value) {
        this._interface = value;
    }

    /**
     * Ruft den Wert der cardinality-Eigenschaft ab.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getCardinality() {
        if (cardinality == null) {
            return "1..1";
        } else {
            return cardinality;
        }
    }

    /**
     * Legt den Wert der cardinality-Eigenschaft fest.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setCardinality(String value) {
        this.cardinality = value;
    }

    /**
     * Ruft den Wert der policy-Eigenschaft ab.
     *
     * @return
     *     possible object is
     *     {@link Tpolicy }
     *
     */
    public Tpolicy getPolicy() {
        if (policy == null) {
            return Tpolicy.STATIC;
        } else {
            return policy;
        }
    }

    /**
     * Legt den Wert der policy-Eigenschaft fest.
     *
     * @param value
     *     allowed object is
     *     {@link Tpolicy }
     *
     */
    public void setPolicy(Tpolicy value) {
        this.policy = value;
    }

    /**
     * Ruft den Wert der target-Eigenschaft ab.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getTarget() {
        return target;
    }

    /**
     * Legt den Wert der target-Eigenschaft fest.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setTarget(String value) {
        this.target = value;
    }

    /**
     * Ruft den Wert der bind-Eigenschaft ab.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getBind() {
        return bind;
    }

    /**
     * Legt den Wert der bind-Eigenschaft fest.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setBind(String value) {
        this.bind = value;
    }

    /**
     * Ruft den Wert der unbind-Eigenschaft ab.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getUnbind() {
        return unbind;
    }

    /**
     * Legt den Wert der unbind-Eigenschaft fest.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setUnbind(String value) {
        this.unbind = value;
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
