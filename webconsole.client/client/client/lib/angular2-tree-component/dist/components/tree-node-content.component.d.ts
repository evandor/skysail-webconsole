import { ComponentResolver, AfterViewInit, ViewContainerRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { TreeModel } from '../models/tree.model';
export interface ITreeNodeTemplate {
    node: TreeNode;
    context: any;
}
export declare class TreeNodeContent implements AfterViewInit {
    private treeModel;
    private componentResolver;
    private viewContainerRef;
    node: TreeNode;
    constructor(treeModel: TreeModel, componentResolver: ComponentResolver, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    _loadTreeNodeContent(): void;
}
