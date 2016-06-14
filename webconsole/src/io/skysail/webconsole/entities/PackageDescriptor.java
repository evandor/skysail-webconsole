package io.skysail.webconsole.entities;

import lombok.Getter;

@Getter
public class PackageDescriptor {

	private String pkgName;

	public PackageDescriptor(String pkgName) {
		this.pkgName = pkgName;
	}

}
