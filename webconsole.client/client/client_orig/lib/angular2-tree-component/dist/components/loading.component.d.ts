import { ViewContainerRef, DynamicComponentLoader } from '@angular/core';
import { TreeModel } from '../models/tree.model';
export declare class LoadingComponent {
    private treeModel;
    private componentLoader;
    private viewContainerRef;
    constructor(treeModel: TreeModel, componentLoader: DynamicComponentLoader, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    _loadTreeNodeContent(): void;
}
