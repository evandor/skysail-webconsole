import {Bundle} from '../domain/Bundle'

export class Snapshot {
    title: string;
    bundleCount: number;
    serviceCount: number;
    bundles: Bundle[] = [];
}