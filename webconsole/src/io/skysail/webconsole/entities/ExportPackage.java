package io.skysail.webconsole.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
public class ExportPackage {

	private String pkgName;

	@Setter
	private String version;

	@Setter
	private String uses;

	public ExportPackage(String pkgName) {
		this.pkgName = pkgName;
	}


}
