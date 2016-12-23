import { TreeNode } from './tree-node.model';
import { TreeModel } from './tree.model';
export interface IActionHandler {
    (tree: TreeModel, node: TreeNode, $event: any, ...rest: any[]): any;
}
export declare const TREE_ACTIONS: {
    TOGGLE_SELECTED: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    TOGGLE_SELECTED_MULTI: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    SELECT: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    DESELECT: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    FOCUS: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    TOGGLE_EXPANDED: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    EXPAND: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    COLLAPSE: (tree: TreeModel, node: TreeNode, $event: any) => TreeNode;
    DRILL_DOWN: (tree: TreeModel, node: TreeNode, $event: any) => void;
    DRILL_UP: (tree: TreeModel, node: TreeNode, $event: any) => void;
    NEXT_NODE: (tree: TreeModel, node: TreeNode, $event: any) => void;
    PREVIOUS_NODE: (tree: TreeModel, node: TreeNode, $event: any) => void;
    MOVE_NODE: (tree: TreeModel, node: TreeNode, $event: any, to: {
        node: TreeNode;
        index: number;
    }) => void;
};
export interface IActionMapping {
    mouse?: {
        click?: IActionHandler;
        dblClick?: IActionHandler;
        contextMenu?: IActionHandler;
        expanderClick?: IActionHandler;
        dragStart?: IActionHandler;
        drag?: IActionHandler;
        dragEnd?: IActionHandler;
        dragOver?: IActionHandler;
        drop?: IActionHandler;
    };
    keys?: {
        [key: number]: IActionHandler;
    };
}
export declare class TreeOptions {
    childrenField: string;
    displayField: string;
    idField: string;
    isExpandedField: string;
    isHiddenField: string;
    treeNodeTemplate: any;
    loadingComponent: any;
    getChildren: any;
    hasCustomContextMenu: boolean;
    context: any;
    actionMapping: any;
    allowDrag: boolean;
    constructor(options?: any);
}
