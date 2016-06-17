import {Bundle} from '../domain/bundle';

export class Service {
    id: string;
    objectClass: string;
    pid: string;
    ranking: number;
    //bundle: Bundle = new Bundle();
    bundleId: number;
    properties: Map<string, string>;
    usingBundles: {};

    constructor() {
        this.properties = new Map<string, string>();
    }
}