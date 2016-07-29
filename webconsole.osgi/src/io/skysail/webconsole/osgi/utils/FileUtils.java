package io.skysail.webconsole.osgi.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import org.osgi.framework.Bundle;
import org.osgi.framework.BundleContext;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class FileUtils {

	public static final String REFERENCE_FILE = "reference:file:";

	public static String getCurrentDirectory() {
		return new File(".").getAbsolutePath();
	}

	public static long getSize(String location) {
		String filename = normalizeBundleLocation(location);
		long size = new File(filename).length() / 1024;
		if (size == 0) {
			log.info("could not determine file size of '{}'", filename);
		}
		return size;
	}

	public static String normalizeBundleLocation(String location) {
		String result = getBundleFilename(location);
		result = result.replace("/", File.separator);
		return result;
	}

	public static String getContent(Bundle bundle, BundleContext bundleContext, String filename) {
		URL resource = bundle.getResource(filename);
		BufferedReader br;
		if (resource == null) {
			return null;
		}
		try {
			URLConnection connection = resource.openConnection();
			InputStream inputStream = connection.getInputStream();
			br = new BufferedReader(new InputStreamReader(inputStream));
			StringBuilder sb = new StringBuilder();
			while (br.ready()) {
				sb.append(br.readLine()).append("\n");
			}
			br.close();
			return sb.toString();
		} catch (Exception e) {
        	LogServiceUtils.error(bundleContext,  e);
		}
		return "problem accessing uri " + filename;
	}

	private static String getBundleFilename(String location) {
		if (location.startsWith("file:/")) {
			return location.substring("file:/".length()).replace("%25", "%");
		} else if (location.startsWith(REFERENCE_FILE)) {
			return location.substring(REFERENCE_FILE.length()).replace("%25", "%");
		} else {
			log.warn("could not parse bundle location {}", location);
		}
		return "";
	}

}
