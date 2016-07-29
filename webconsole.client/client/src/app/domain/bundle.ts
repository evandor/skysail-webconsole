import {ExportPackage} from '../domain/exportPackage';
import {ImportPackage} from '../domain/importPackage';
import {Service} from '../domain/service';
import {ManifestHeader} from '../domain/manifestHeader';
import {WireDescriptor} from '../domain/wireDescriptor';

export class Bundle {
    id: string;
    symbolicName: string;
    bundleClasspath: string;
    copyright: string;
    description: string;
    docUrl: string;
    lastModification: number;
    location: string;
    startLevel: number;
    state: string;
    size: number;
    vendor: string;
    version: string;
    exportPackage: ExportPackage[] = [];
    importPackage: ImportPackage[] = [];
    manifestHeaders: ManifestHeader;
    wireDescriptor: WireDescriptor;
    providedServices: Service[] = [];
    servicesInUse: Service[] = [];
    sourcePaths: string[];
    registeredServicesCount: number;
    scrMap: Map<string, string>;

    constructor() {
        this.scrMap = new Map<string, string>();
    }
}