import { DynamicComponentLoader, ElementRef, AfterViewInit } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
export declare class TreeNodeComponent implements AfterViewInit {
    private componentLoader;
    private elementRef;
    node: TreeNode;
    constructor(componentLoader: DynamicComponentLoader, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
