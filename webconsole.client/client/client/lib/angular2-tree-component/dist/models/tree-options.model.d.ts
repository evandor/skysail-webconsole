import { TreeNode } from './tree-node.model';
import { TreeModel } from './tree.model';
export interface IActionHandler {
    (tree: TreeModel, node: TreeNode, $event: any): any;
}
export declare const TREE_ACTIONS: {
    TOGGLE_SELECTED: (tree: TreeModel, node: TreeNode, $event: any) => void;
    TOGGLE_SELECTED_MULTI: (tree: TreeModel, node: TreeNode, $event: any) => void;
    SELECT: (tree: TreeModel, node: TreeNode, $event: any) => void;
    DESELECT: (tree: TreeModel, node: TreeNode, $event: any) => void;
    FOCUS: (tree: TreeModel, node: TreeNode, $event: any) => void;
    TOGGLE_EXPANDED: (tree: TreeModel, node: TreeNode, $event: any) => void;
    EXPAND: (tree: TreeModel, node: TreeNode, $event: any) => void;
    COLLAPSE: (tree: TreeModel, node: TreeNode, $event: any) => void;
    DRILL_DOWN: (tree: TreeModel, node: TreeNode, $event: any) => void;
    DRILL_UP: (tree: TreeModel, node: TreeNode, $event: any) => void;
    NEXT_NODE: (tree: TreeModel, node: TreeNode, $event: any) => void;
    PREVIOUS_NODE: (tree: TreeModel, node: TreeNode, $event: any) => void;
};
export interface IActionMapping {
    mouse?: {
        click?: IActionHandler;
        dblClick?: IActionHandler;
        contextMenu?: IActionHandler;
        expanderClick?: IActionHandler;
        shift?: {
            click?: IActionHandler;
            dblClick?: IActionHandler;
            contextMenu?: IActionHandler;
            expanderClick?: IActionHandler;
        };
        ctrl?: {
            click?: IActionHandler;
            dblClick?: IActionHandler;
            contextMenu?: IActionHandler;
            expanderClick?: IActionHandler;
        };
        alt?: {
            click?: IActionHandler;
            dblClick?: IActionHandler;
            contextMenu?: IActionHandler;
            expanderClick?: IActionHandler;
        };
    };
    keys?: {
        [key: number]: IActionHandler;
    };
}
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
    actionMapping: any;
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
    actionMapping: any;
    constructor(options?: any);
}
