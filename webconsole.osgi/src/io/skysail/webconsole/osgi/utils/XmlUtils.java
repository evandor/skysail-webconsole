package io.skysail.webconsole.osgi.utils;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.osgi.framework.BundleContext;
import org.osgi.xmlns.scr.v1_1.ObjectFactory;
import org.osgi.xmlns.scr.v1_1.Tcomponent;

public class XmlUtils {

	public static Tcomponent parse(String xml, BundleContext ctx) {
	    JAXBContext jaxbContext;
		try {
			jaxbContext = JAXBContext.newInstance(ObjectFactory.class);
		    Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		    InputStream inputStream = new ByteArrayInputStream(xml.getBytes(StandardCharsets.UTF_8));
		    @SuppressWarnings("unchecked")
			JAXBElement<Tcomponent> unmarshalledObject = (JAXBElement<Tcomponent>)unmarshaller.unmarshal(inputStream);
		    Tcomponent component = unmarshalledObject.getValue();
		    return component;
		} catch (JAXBException e) {
			LogServiceUtils.error(ctx, e);
		}
		return null;
	}

}
