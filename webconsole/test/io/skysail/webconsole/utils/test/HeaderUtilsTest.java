package io.skysail.webconsole.utils.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;

import io.skysail.webconsole.entities.packages.ExportPackage;
import io.skysail.webconsole.utils.HeaderUtils;

public class HeaderUtilsTest {

	//, , javax.annotation.processing; uses:="javax.tools,javax.lang.model,javax.lang.model.element,javax.lang.model.util"; version="0.0.0.1_008_JavaSE", javax.annotation; version="0.0.0.1_008_JavaSE", javax.crypto.interfaces; uses:="javax.crypto.spec,javax.crypto"; version="0.0.0.1_008_JavaSE"

	@Test
	public void parses_simple_exportPackage_expression() {
		List<ExportPackage> exportedPackages = HeaderUtils.parseExportPackage("org.osgi.dto;");
		assertThat(exportedPackages.size(),is(1));
		assertThat(exportedPackages.get(0).getPkgName(),is("org.osgi.dto"));
	}

	@Test
	public void parses_simple_exportPackage_with_version() {
		List<ExportPackage> exportedPackages = HeaderUtils.parseExportPackage("org.osgi.dto; version=\"1.0.0\"");
		assertThat(exportedPackages.size(),is(1));
		assertThat(exportedPackages.get(0).getPkgName(),is("org.osgi.dto"));
		assertThat(exportedPackages.get(0).getVersion(),is("1.0.0"));
	}

	@Test
	public void parses_simple_exportPackage_with_uses_clause_and_version() {
		List<ExportPackage> exportedPackages = HeaderUtils.parseExportPackage("javax.accessibility; uses:=\"javax.swing.text\"; version=\"0.0.0.1_008_JavaSE\"");
		assertThat(exportedPackages.size(),is(1));
		assertThat(exportedPackages.get(0).getPkgName(),is("javax.accessibility"));
		assertThat(exportedPackages.get(0).getVersion(),is("0.0.0.1_008_JavaSE"));
		assertThat(exportedPackages.get(0).getUses(),is("javax.swing.text"));
	}

	@Test
	public void parses_simple_exportPackage_with_version_and_uses_clause() {
		List<ExportPackage> exportedPackages = HeaderUtils.parseExportPackage("javax.accessibility; version=\"0.0.0.1_008_JavaSE\"; uses:=\"javax.swing.text\"");
		assertThat(exportedPackages.size(),is(1));
		assertThat(exportedPackages.get(0).getPkgName(),is("javax.accessibility"));
		assertThat(exportedPackages.get(0).getVersion(),is("0.0.0.1_008_JavaSE"));
		assertThat(exportedPackages.get(0).getUses(),is("javax.swing.text"));
	}

	@Test
	public void parses_two_exportedPackages() {
		List<ExportPackage> exportedPackages = HeaderUtils.parseExportPackage("javax.activation; version=\"1.2.3\", javax.activity; version=\"3.2.1\"");
		assertThat(exportedPackages.size(),is(2));
		assertThat(exportedPackages.get(0).getPkgName(),is("javax.activation"));
		assertThat(exportedPackages.get(0).getVersion(),is("1.2.3"));
		assertThat(exportedPackages.get(1).getPkgName(),is("javax.activity"));
		assertThat(exportedPackages.get(1).getVersion(),is("3.2.1"));
	}

}
