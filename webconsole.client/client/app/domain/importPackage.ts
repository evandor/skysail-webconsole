import {PackageResolvingCandidate} from '../domain/packageResolvingCandidate';

export interface ImportPackage {
    pkgName: string;
    version: string;
    resolution: string;
    versionRange: string;
    bundleSymbolicName: string;
    bundleVersion: string;
    packageResolvingCandidates: PackageResolvingCandidate[];
}