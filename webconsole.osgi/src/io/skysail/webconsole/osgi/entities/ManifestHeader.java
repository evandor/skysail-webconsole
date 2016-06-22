package io.skysail.webconsole.osgi.entities;

import lombok.Getter;
import lombok.NonNull;

@Getter
public class ManifestHeader {

	private String key;
	private String value;

	public ManifestHeader(@NonNull String key, String value) {
		this.value = value;
		this.key = key;
	}
}
