import {Alert} from '../domain/alert';

export class WireDescriptor {
    alerts: Alert[];
    capabilities: Map<string, string>;
    requirements: Map<string,string>;
}