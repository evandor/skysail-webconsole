package io.skysail.webconsole.osgi.entities.packages;

import lombok.Getter;

@Getter
public class PackageDescriptor {

	private String pkgName;

	public PackageDescriptor(String pkgName) {
		this.pkgName = pkgName;
	}

}
