import { OnChanges } from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeOptions } from '../models/tree-options.model';
export declare class TreeComponent implements OnChanges {
    treeModel: TreeModel;
    constructor(treeModel: TreeModel);
    nodes: any[];
    options: TreeOptions;
    focused: boolean;
    onToggle: any;
    onActiveChanged: any;
    onActivate: any;
    onDeactivate: any;
    onFocus: any;
    onBlur: any;
    onDoubleClick: any;
    onContextMenu: any;
    onInitialized: any;
    onKeydown($event: any): void;
    onMousedown($event: any): void;
    ngOnChanges(changes: any): void;
}
