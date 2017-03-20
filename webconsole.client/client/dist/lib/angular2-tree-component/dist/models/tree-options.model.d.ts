import { TreeNode } from './tree-node.model';
export interface ITreeOptions {
    childrenField: string;
    displayField: string;
    idField: string;
    isExpandedField: string;
    treeNodeTemplate: any;
    loadingComponent: any;
    getChildren(node: TreeNode): any;
    hasCustomContextMenu: boolean;
    context: any;
}
export declare class TreeOptions {
    childrenField: string;
    displayField: string;
    idField: string;
    isExpandedField: string;
    treeNodeTemplate: any;
    loadingComponent: any;
    getChildren: any;
    hasCustomContextMenu: boolean;
    context: any;
    constructor(options?: {});
}
