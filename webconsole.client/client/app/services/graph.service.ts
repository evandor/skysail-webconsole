import {Component} from 'angular2/core'

@Component({

})
export class GraphService {
    data: Array<number>;
    constructor() {
        this.data = [1, 2, 3];
    }
}
