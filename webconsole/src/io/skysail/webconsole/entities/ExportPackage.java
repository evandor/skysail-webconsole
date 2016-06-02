package io.skysail.webconsole.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@ToString
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
