export class Edge {
    source: string;
    target: string;
    weight: number;

    constructor(source, target, weight) {
        this.source = source;
        this.target = target;
        this.weight = weight;
    }
}
