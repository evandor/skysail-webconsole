import { ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { ITreeNodeTemplate } from './tree-node-content.component';
export declare class TreeNodeComponent implements AfterViewInit {
    private elementRef;
    node: TreeNode;
    nodeIndex: number;
    treeNodeContentTemplate: TemplateRef<ITreeNodeTemplate>;
    loadingTemplate: TemplateRef<any>;
    onDragStart(): void;
    onDragEnd(): void;
    onDragOver($event: any): void;
    onDrop($event: any): void;
    onDragLeave(nodeContentWrapper: any, $event: any): void;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
