package io.skysail.webconsole.entities;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Dictionary;
import java.util.Enumeration;
import java.util.List;
import java.util.stream.Collectors;

import org.antlr.v4.runtime.CommonTokenStream;
import org.osgi.framework.Bundle;
import org.osgi.framework.Constants;

import io.skysail.webconsole.antlr.ExportPackageLexer;
import io.skysail.webconsole.antlr.ExportPackageParser;
import io.skysail.webconsole.antlr.ExportPackageParser.ExportPackageContext;
import io.skysail.webconsole.entities.antlr.ExportPackageVisitor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
public class BundleDetails extends BundleDescriptor {

    private String location;
    private long lastModification;
    private String docUrl;
    private String vendor;
    private String copyright;
    private String description;
    private Integer startLevel;
    private String bundleClasspath;
    private List<ExportPackage> exportPackage = new ArrayList<>();
    private List<ManifestHeader> manifestHeaders = new ArrayList<>();
    private String exportService;

    public BundleDetails(Bundle bundle) {
        super(bundle);
        this.location = bundle.getLocation();
        this.lastModification = bundle.getLastModified();
        this.startLevel = 0; // TODO

        Dictionary<?, ?> headers = bundle.getHeaders(null);
        if (headers != null) {
            this.docUrl = (String) headers.get(Constants.BUNDLE_DOCURL);
            this.vendor = (String) headers.get(Constants.BUNDLE_VENDOR);
            this.copyright = (String) headers.get(Constants.BUNDLE_COPYRIGHT);
            this.description = (String) headers.get(Constants.BUNDLE_DESCRIPTION);
            this.bundleClasspath = (String) headers.get(Constants.BUNDLE_CLASSPATH);
            this.exportPackage = getExportedPackages(headers);
            this.manifestHeaders = dump(headers);
        }
    }

    private List<ManifestHeader> dump(Dictionary<?, ?> headers) {
        List<ManifestHeader> result = new ArrayList<>();
        Enumeration<?> keys = headers.keys();
        while (keys.hasMoreElements()) {
            String key = (String) keys.nextElement();
            result.add(new ManifestHeader(key, (String) headers.get(key)));
        }
        return result.stream().sorted((e1, e2) -> e1.getKey().compareTo(e2.getKey())).collect(Collectors.toList());
    }

    private List<ExportPackage> getExportedPackages(Dictionary<?, ?> headers) {
        String rawValue = (String) headers.get(Constants.EXPORT_PACKAGE);
        if (rawValue == null || rawValue.trim().length() == 0) {
            return Collections.emptyList();
        }

        ExportPackageParser parser = parse(rawValue);
        ExportPackageContext tree = parser.exportPackage();
        System.out.println(tree.toStringTree(parser));

        List<ExportPackage> result = new ArrayList<>();
        ExportPackageVisitor exportPackageVisitor = new ExportPackageVisitor(result);
        exportPackageVisitor.visit(tree);

        return result.stream() // NOSONAR
                .sorted((p1, p2) -> p1.getPkgName().compareTo(p2.getPkgName()))
                .collect(Collectors.toList());
    }

    private ExportPackageParser parse(String inputString) {
        org.antlr.v4.runtime.CharStream input = new org.antlr.v4.runtime.ANTLRInputStream(inputString);
        ExportPackageLexer lexer = new ExportPackageLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        return new ExportPackageParser(tokens);
    }

}
