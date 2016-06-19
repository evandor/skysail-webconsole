import {Bundle} from '../domain/bundle';

export class PackageResolvingCandidate {
    exportingBundle: Bundle;
    name: string;
    version: string;
}