import {Bundle} from '../domain/bundle';

export class ExportPackage {
    pkgName: string;
    version: string;
    uses: string;
    mandatory: string;
    exclude: string;
    include: string;
    exportingBundle: Bundle;
}