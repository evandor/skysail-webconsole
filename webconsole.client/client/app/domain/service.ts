import {Bundle} from '../domain/bundle';

export interface Service {
    id: string;
    objectClass: string;
    pid: string;
    ranking: number;
    bundle: Bundle;
    properties: {};
    usingBundles: {};
}