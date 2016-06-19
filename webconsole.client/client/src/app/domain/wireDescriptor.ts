import {Alert} from '../domain/alert';

import {Wire} from '../domain/wire';

export class WireDescriptor {
    alerts: Alert[];
    capabilities: Map<string, string>;
    requirements: Map<string,string>;
    providedWires: Array<Wire> = [];
    requiredWires: Array<Wire> = [];
}