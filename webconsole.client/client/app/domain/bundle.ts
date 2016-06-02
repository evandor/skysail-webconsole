import {ExportPackage} from '../domain/exportPackage';
import {ManifestHeader} from '../domain/manifestHeader';

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
    manifestHeaders: ManifestHeader;
}