import {Bundle} from '../domain/bundle';

export interface ExportPackage {
    pkgName: string;
    version: string;
    uses: string;
    mandatory: string;
    exclude: string;
    include: string;
    exportingBundle: Bundle;
}