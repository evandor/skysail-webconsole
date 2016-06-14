package io.skysail.webconsole.utils;

import java.util.ArrayList;
import java.util.List;

import io.skysail.webconsole.entities.packages.ExportPackage;

public class HeaderUtils {

	public static List<ExportPackage> parseExportPackage(String input) {
		String[] split = input.split("[;|,]");

		List<ExportPackage> result = new ArrayList<>();

		ExportPackage pkg = null;
		for (String part : split) {
			String token = part.trim();
			if (packageStarts(token)) {
				pkg = new ExportPackage(token);
				result.add(pkg);
			} else if (versionStarts(token)) {
				pkg.setVersion(token.substring(9).replace("\"", "")); // NOSONAR
			} else if (usesStarts(token)) {
				pkg.setUses(token.substring(6).replace("\"", "")); // NOSONAR
			}
		}
		return result;
	}

	private static boolean usesStarts(String token) {
		return token.startsWith("uses:=");
	}

	private static boolean versionStarts(String token) {
		return token.startsWith("version=");
	}

	private static boolean packageStarts(String token) {
		return !versionStarts(token) && !usesStarts(token);
	}

}
